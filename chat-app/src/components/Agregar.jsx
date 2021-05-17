import React from 'react'
import {chatContext} from '../context/ChatProvider'

const Agregar = () => {

    const {agregarMensaje, usuario} = React.useContext(chatContext)
    const [mensaje,setMensaje] = React.useState('')

    const agregar = (e) =>{
        e.preventDefault()
        if(!mensaje.trim()){
            console.log('viene vacio')
            return
        }
        agregarMensaje(usuario.uid,mensaje)
        setMensaje('')
    }

    return (
    
            <form 
                className="fixed-bottom input-group p-3 bg-dark"
                onSubmit = {agregar}
                >
                <input 
                    type="text"
                    className="form-control"
                    value = {mensaje}
                    onChange = {e=> setMensaje(e.target.value)}
                 />
                 <div
                    className="input-group-append"
                 >
                    <button
                        className = "btn btn-primary"
                        type = "submit"
                    >
                        Enviar

                    </button>
                 </div>
            </form>
       
    )
}

export default Agregar
