import React from 'react'
import './Burbujas.css'

export default function Burbuja({img, titulo}){
    return(
        <div className="burbuja">
            <img className='imgBurbuja' style={{width:250, height:180}} src={img} alt=""/>
            <h3 className='titulo'>{titulo}</h3>
        </div>
    )
}