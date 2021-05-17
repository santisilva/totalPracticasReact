import React from 'react'
import Chat from './components/Chat'
import Navbar from './components/Navbar'
import {chatContext} from './context/ChatProvider'

const App = () => {

    const {usuario} = React.useContext(chatContext)

    return usuario !== null ?(
        <div>
            <Navbar/>
            {
                
                usuario.estado  ? 
                (
                    <Chat/>
                ):
                (
                    <div className="lead text-center mt-5">Debes iniciar sesion</div>
                )
            }
        </div>
    ) : (
        <div>
            Cargando...
        </div>
    )
}

export default App
