import React, {useState, useEffect} from 'react'
//firebase
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
//mui
import { Divider } from '@mui/material';
//css
import './Blog.css'

export default function ComentariosBlog(){
    const [comentarios, setComentarios] = useState([])

    const getComentarios = async () => {
        const itemsCollection = collection(db , 'comentarios')
        const comentariosSnapshot = await getDocs(itemsCollection)
        const listacomentarios = comentariosSnapshot.docs.map( (doc) => {
            let comentario = doc.data()
            comentario.id = doc.id
            return comentario
        })
        return listacomentarios
    }

    useEffect(() => {
        getComentarios()
        .then(comentario => setComentarios(comentario))
        .catch( (error) => {console.log("Error: ", error)})
        .finally( ()=>{console.log(`Tarea finalizada.`)})
    }, []);

    return(
        <div className='listaComentariosBlog'>
            {comentarios.map( (comentario) => {
                return(
                    <li style={{listStyle: 'none'}} key={comentario.id}>
                        <Divider></Divider>
                        <div style={{marginLeft:'2%'}}>
                            <h4>Hola, soy {comentario.usuario.nombre} y soy {comentario.usuario.tipo}</h4>
                            <p>{comentario.usuario.mensaje}</p>
                        </div>
                    </li>
                )
            }
            )}   
        </div>
    )
}