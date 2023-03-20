import './Blog.css'
import React, {useState} from 'react'
//firebase
import db from "../../firebase";
import { addDoc, collection } from 'firebase/firestore';

export default function FormularioBlog(){
    const [formData, setFormData] = useState({
        nombre: '',
        tipo: '',
        mensaje: '',
    })
    const [comentarios, setComentarios] = useState({
        usuario: formData,
        date: new Date().toString(),
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevComentario = {
            ...comentarios,
            usuario: formData
        }
        setComentarios({
            ...comentarios,
            usuario: formData
        })
        pushComentario(prevComentario)
    }

    const pushComentario = async (prevComentario) => {
        const comentariosFirebase = collection(db, 'comentarios')
        const comentariosDoc = await addDoc(comentariosFirebase, prevComentario)
        console.log("id comentario", comentariosDoc.id)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div className='containerBlog' style={{display: 'flex'}}>
            <div className='introBlog'>
                <h1>Tenes algo que compartir?</h1>
                <p>A través de este formulario podes comentar en el blog para ayudar a otros usuarios con tus recomendaciones.</p>
                <p>Cualquier cosa que tengas para decir es bienvenida, así que no lo dudes y deja un mensaje!</p>
                <p>Gracias.</p>
            </div>
            <form onSubmit={handleSubmit} className="dejanosComentarioBlog">
                <fieldset >
                    <legend>DEJANOS TU COMENTARIO</legend>
                    <p>
                        <label>¿Quién sos? <br/>
                            <input type="text" name="nombre" placeholder='Nombre'
                                onChange={handleChange}
                                value={formData.nombre}
                            />
                        </label>
                    </p>
                    <p>
                        <label>¿Qué sos? -- Productor Agropecuario | Ingeniero Agronomo | Comerciante<br/>
                            <input type="text" name="tipo" placeholder='Tipo de visitante'
                            onChange={handleChange}/>
                        </label>
                    </p>
                    <p>
                        <label>¿Qué queres compartir? <br/>
                            <input type="text" name="mensaje" placeholder='Deja un comentario' 
                                onChange={handleChange}
                                value={formData.mensaje}
                            />
                        </label>
                    </p>
                    <input type="submit" value="ENVIAR"/>
                </fieldset>
            </form>
        </div>
    )
}