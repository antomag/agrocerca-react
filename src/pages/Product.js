import React from 'react'
import './Product.css'
import Burbuja from "../components/BurbujasProductos/BurbujasProductos";
import { Link } from 'react-router-dom';


export default function ProductPage(){
    return(
        <>
            <div style={{textAlign:'center'}}>
                <h1>NOVEDADES DEL MERCADO</h1>
            </div>
            <div className="gridProductos">
                <Link to={`/productos/Proteccion`}><Burbuja img="/img/insecticida.jpg" titulo="PROTECCION"/></Link>
                <Link to={`/productos/Semillas`}><Burbuja img="/img/semilla.jpg" titulo="SEMILLAS"/></Link>
                <Link to={`/productos/Fertilizante`}><Burbuja img="/img/fertilizacion.jpg" titulo="FERTILIZANTES"/></Link>
                <Link to={`/productos/Inoculante`}><Burbuja img="/img/inoculante.jpg" titulo="INOCULANTES"/></Link>
            </div>
        </>
    )
}