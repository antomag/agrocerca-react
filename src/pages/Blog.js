import React from 'react'
import FormularioBlog from "../components/Blog/FormularioBlog"
import ComentariosBlog from "../components/Blog/ComentariosBlog";

export default function BlogPage(){
    return(
        <>
            <FormularioBlog/>
            <h2 style={{textAlign:'center'}}>BLOG DE COMENTARIOS</h2>
            <ComentariosBlog/>
        </>
    )
}