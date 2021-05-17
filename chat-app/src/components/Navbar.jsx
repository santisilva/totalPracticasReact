import React from 'react'
import {chatContext} from '../context/ChatProvider'

const Navbar = () => {

    const {usuario,ingresoUsuario,cerrarSesion} = React.useContext(chatContext)

    return (
        <nav className='navbar navbar-dark bg-dark'>
            <span className= 'navbar-brand'>
                Chat
            </span>
            <div>
                {
                    usuario.estado && 
                    <button 
                        className="btn btn-outline-danger my-2"
                        onClick={cerrarSesion}
                    >
                    Cerrar Sesion
                    </button>
                }
                {
                    !usuario.estado && 
                    <button 
                        className="btn btn-outline-success my-2"
                        onClick={ingresoUsuario}
                    >
                        Acceder
                    </button>
                }
                
            </div>
        </nav>
    )
}

export default Navbar
