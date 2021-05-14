import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ingresoUsuarioAccion} from '../redux/usuarioDucks'
import {withRouter} from 'react-router-dom'

const Login = (props) => {
    
    const dispatch = useDispatch()
    const loading = useSelector(store => store.usuario.loading)
    const activo = useSelector(store => store.usuario.activo)

   // console.log(activo)

    React.useEffect(() => {
        //console.log(activo)
        if(activo){
            props.history.push('/')
        }
    }, [activo,props.history])

    return (
        <div className="row">
            <div className="col-md-3"/>
            <div className="col-md-6 float-none">
                <div className= "card mt-5 text-center border-info">
                    <div className="card-body">
                        <div className="card-title text-uppercase">Ingreso con google</div>
                            <button className='btn btn-dark mr-2'
                                onClick={()=> dispatch(ingresoUsuarioAccion())}
                                disabled={loading}
                                >Acceder</button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
