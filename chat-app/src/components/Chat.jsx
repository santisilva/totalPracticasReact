import React from 'react'
import Agregar from './Agregar'

import {chatContext} from '../context/ChatProvider'

const Chat = () => {
    
    const {mensajes,usuario} = React.useContext(chatContext)
    const punterosChat = React.useRef(null)

    React.useEffect(()=>{
        console.log(punterosChat)
        punterosChat.current.scrollTop = punterosChat.current.scrollHeight
    },[mensajes])
    
    return (
        
        
        <div 
            className="mt-3 px-2"
            style= {{height: '75vh', overflowY: 'scroll'}}
            ref= {punterosChat}
        >
            {
                mensajes.map((item,index)=> (
                    usuario.uid === item.uid ? 
                    (
                        <div className="d-flex justify-content-end mb-2" key={index}> 
                            <div className="alert alert-primary">
                                {item.texto}
                            </div>
                        </div>
                    ):
                    (
                        <div className="d-flex justify-content-start mb-2" key={index}> 
                            <div className="alert alert-dark">
                            {item.texto}
                            </div>
                        </div>
                    )

                ))
            }
            

            <Agregar/>
            <div className="mt-2"/>
        </div>
    )
}

export default Chat
