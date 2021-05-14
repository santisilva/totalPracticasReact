import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {actualizarUsuarioAccion, actualizarFotoAccion} from '../redux/usuarioDucks'

const Perfil = () => {

    const usuario = useSelector(store => store.usuario.user)
    const loading = useSelector(store => store.usuario.loading)
    console.log(usuario)

    const [nombreUsuario,setNombreUsuario]= React.useState(usuario.displayName)
    const [editando,setEditando]= React.useState(false)
    const [error, setError] = React.useState(false)

    const dispatch = useDispatch()

    const actualizarUsuario = ()=> {
        setEditando(true)
        if(!nombreUsuario.trim()){
            console.log("nombre vacio")
            return 
        }
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setEditando(false)
    }

    const seleccionarArchivo = (e) => {
        console.log(e.target.files[0])   
        const imagen = e.target.files[0]
    
        if(imagen === undefined){
            console.log('sin imagen')
            return
        }
    
        if(imagen.type === 'image/jpeg' || imagen.type === 'image/png'){
            dispatch(actualizarFotoAccion(imagen))       
            setError(false) 
            }else{
            console.log('archivo no válido')
            setError(true)
            return
            }
    }

    return (
        <div className= "card mt-5 text-center border-info">
            <div className="card-body">
                <img src={usuario.photoURL} alt="" width='130' height='130'/>
                <h5 className="card-title">Nombre de Usuario: {usuario.displayName}</h5>
                <p className="card-text">Email: {usuario.email}</p>
                <button className='btn btn-dark mr-2' onClick={()=>setEditando(true)}     
                    >Editar Nombre
                </button>
            </div>
            {
                error &&
                <div className="alert alert-warning">
                    Foto en .png o .jpg
                </div>
    }
            {
                    loading && 
                    <div className="card-body">
                        <div className="d-flex justify-content-center my-2">
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>   
                            </div>
                            <p> loading...</p>
                        </div>
                    </div>
                }
              
            {
                editando && 
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-6 float-end">
                            <div class="input-group">
                                <input 
                                     type="text"
                                     className= "form-control"
                                     value= {nombreUsuario}
                                     onChange={e=> setNombreUsuario(e.target.value)}
                                />
                                <span class="input-group-btn">
                                    <button 
                                        className="btn btn-dark" 
                                        type="button" 
                                        onClick= {()=>actualizarUsuario()}
                                    > 
                                        Actualizar
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="custom-file">
                <input 
                    type="file" 
                    className="custom-file-input" 
                     id="validatedCustomFile" 
                    disabled={loading}
                    style={{display:'none'}}
                    onChange={e=> seleccionarArchivo(e)}
                />
                <label 
                    className={loading ? "btn btn-dark disabled" : "btn btn-dark"}
                     htmlFor="validatedCustomFile"
                >
                    Editar Imagen
                </label>
            </div>
            <div className="mt-2"/>
        </div>
    )
}

export default Perfil
