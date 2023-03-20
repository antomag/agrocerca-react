import React, {useState, useEffect} from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom';
//firebase
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
//css
import './Card.css'
//componentes
import BotonesFiltro from "../Filter/Filter";


export default function CardList(){
    const [productos, setProductos] = useState([])
    const {categoria}= useParams()
    
    const getProductos = async () => {
        const itemsCollection = collection(db , 'productos')
        const productosSnapshot = await getDocs(itemsCollection)
        const listaProductos = productosSnapshot.docs.map( (doc) => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        })
        return listaProductos
    }

    useEffect(() => {
        getProductos()
        .then( (producto) => {
            if(categoria){
                const productoFiltrado = producto.filter( (product) => product.categoria === categoria)
                setTimeout( () => {setProductos(productoFiltrado)}, 1000)
            }else{
                setProductos(producto)
            }
        })
        .catch( (error) => {console.log("Error: ", error)})
        .finally( ()=>{console.log(`Tarea finalizada.`)})
    }, [categoria]);

    return(
        <>
            <BotonesFiltro/>
            (<div className='containerList'>
                {productos.map( (producto) => {
                    return(
                        <Card datos={producto} key={producto.id}/>
                    )
                }
                )}
            </div>
            )
        </>
    )
}