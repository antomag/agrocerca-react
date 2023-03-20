import React from 'react';
//css
import './Home.css'

export default function HomePage () {

    return(
        <>
            <div className='contenedorImg'>
                <img className='imgPrincipal' src="img/fondo-trigo.jpg" alt='Campo semprado con trigo al atardecer'/>
                <h1 className='texto1'>AGROCERCA</h1>
                <h3 className='texto'>- Te acercamos al agro -</h3>
            </div>
            
            <div className='herramientas'>
                <div style={{width:'60%', margin:'auto'}}>
                    <iframe className='radar' src="https://embed.windy.com/embed2.html?lat=-33.893&lon=-60.661&detailLat=-33.484&detailLon=-60.662&width=400&height=450&zoom=8&level=surface&overlay=radar&product=radar&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"></iframe>
                </div>
                
                <div style={{margin:'auto', textAlign:'center'}}>
                    <h3>Cotizaciones Locales de Granos</h3>
                    <div className='cotizacionGranos'>
                        <a href='https://www.bcr.com.ar/es/mercados/mercado-de-granos/cotizaciones/cotizaciones-locales-0' target="_blank" rel="noreferrer noopener"><img style={{width:250, height:100}} src='img/bolsa-comercio-ros.png' alt='Logo Bolsa de Comercio'/></a>
                    </div>
                    <br></br>
                    <h3>Cotizaciones Internacionales de Granos</h3>
                    <div className='cotizacionGranos'>
                        <a href='https://www.bcr.com.ar/es/mercados/mercado-de-granos/cotizaciones/cotizaciones-internacionales-1' target="_blank" rel="noreferrer noopener"><img style={{width:250, height:100}} src='img/bolsa-comercio-ros.png' alt='Logo Bolsa de Comercio'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}