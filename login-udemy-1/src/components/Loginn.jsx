import React from 'react'
import {auth,db} from '../firebase.js'
import {withRouter} from 'react-router-dom'

const Loginn = (props) => {

    const [email,setEmail] = React.useState('')
    const [pass,setPass] = React.useState('')
    const [error,setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            //console.log("ingrese un email valido")
            setError("ingrese un email valido")
            return
        }
        if(!pass.trim()){
            //console.log("ingrese un password valida")
            setError("ingrese un pasword valido")
            return
        }
        if(pass.length < 6){
            //console.log("el password debe ser mayor a 6 caracteres")
            setError("el password debe ser mayor a 6 caracteres")
            return
        }
        console.log("pasaron todas las validaciones")
        setError(null)


        if(esRegistro){
            registrar()
        }
        else {
            login()
        }
        
    }

    const login = React.useCallback(async()=>{
            try {
                const respuesta = await auth.signInWithEmailAndPassword(email,pass)
                console.log(respuesta.user)
                setEmail('')
                setPass('')
                setError(null)
                props.history.push("/admin")
            } catch (error) {
                console.log(error)
                if(error.code === "auth/user-not-found"){
                    setError("Email no valido")
                }
                if(error.code === "auth/wrong-password"){
                    setError("Password no valido")
                }
                
                
            }
    },[email,pass,props.history])

    const registrar = React.useCallback(async()=>{
        try {
            const respuesta = await auth.createUserWithEmailAndPassword(email,pass)
            await db.collection('usuarios').doc(respuesta.user.email).set({
                email: respuesta.user.email,
                uid: respuesta.user.uid
            })
            console.log(respuesta.user)
            setEmail('')
            setPass('')
            setError(null)
            props.history.push("/admin")
            
        } catch (error) {
            console.log(error)
            if(error.code === "auth/invalid-email"){
                setError("Email no valido")
            }
            if(error.code=== "auth/email-already-in-use"){
                setError("Este email ya esta siendo utilizado")
            }
        }

    },[email,pass,props.history])
    

    return (
        <div className="mt-5">
            <h3 className="text-center">{esRegistro? "Registro de usuarios":"Login de acceso"}</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">{error}</div>
                            ) //es como un if pero que no tiene segunda accion si la condicion es falsa
                        }
                        <input 
                        type="email" 
                        className="form-control mb-2"
                        placeholder= "Ingrese un email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        >
                        </input>
                        <input 
                        type="password" 
                        className="form-control mb-2"
                        placeholder= "Ingrese un password"
                        onChange={e => setPass(e.target.value)}
                        value={pass}
                        >
                        </input>
                        <div className="d-grid gap-2">
                         <button className="btn btn-dark btn-lg btn-block" type="submit">
                             {
                                 esRegistro? "Registrarse":"Login"
                             }
                         </button>
                         <button 
                            className="btn btn-info btn-sm btn-blobk" 
                            onClick={ ()=> setEsRegistro(!esRegistro)}
                            type="button"
                         > 
                         {
                            esRegistro? "Ya tienes cuenta?":"No tienes cuenta?"
                         }
                         </button>
                         
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Loginn)
