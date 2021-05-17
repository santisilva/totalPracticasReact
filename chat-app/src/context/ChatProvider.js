import React from 'react'
import {db, auth, provider} from '../firebase'

export const chatContext = React.createContext()




const ChatProvider = (props) => {

    const dataUsuario ={
        uid: null,
        email: null,
        estado: null
    }
    const [usuario,setUsuario] = React.useState(dataUsuario)
    const [mensajes,setMensajes]= React.useState([])

    React.useEffect(()=>{
        detectarUsuario()
       // eslint-disable-next-line
    },[])

    const detectarUsuario = () =>{
        auth.onAuthStateChanged(user => {
            if(user){
                setUsuario({
                    uid: user.uid,
                    email: user.email,
                    estado: true
                })
                cargarMensajes()
            }else{
                setUsuario({
                    uid: null,
                    email: null,
                    estado: false
                })
            }
        })
    }

    const cargarMensajes = ()=>{
         db.collection('chat').orderBy('fecha')
            .onSnapshot(query =>{//esto hace que cargue en tiempo real solo, por lo que no tengo que hacer la carga yo.
                const arrayMensajes = query.docs.map(item => item.data())
                setMensajes(arrayMensajes)
            })
    }

    const agregarMensaje = async(uidChat,textoInput)=> {
        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                uid: uidChat
            })
        } catch (error) {
            console.log(error)
        }
    }

    const ingresoUsuario = async() => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    }
    const cerrarSesion = () => {
        auth.signOut()
    }

    return (
        <chatContext.Provider value={{usuario,ingresoUsuario,cerrarSesion,mensajes,agregarMensaje}}>
            {props.children}
        </chatContext.Provider>
    )
}

export default ChatProvider
