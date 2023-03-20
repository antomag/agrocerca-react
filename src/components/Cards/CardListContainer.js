import React from 'react'
import CardList from "./CardList";

export default function CardListContainer(){
    return(
        <div style={{display:'flex', flexDirection:'column', flexWrap:'nowrap'}}>
            <CardList/>
        </div>
    )
}