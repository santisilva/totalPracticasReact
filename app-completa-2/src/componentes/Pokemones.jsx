import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonsAction, siguientePokemonAccion,anteriorPokemonAccion, unPokedetalleAccion} from '../redux/pokemonDucks'
import Detalle from './Detalle'

const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    return (
        <div className="aaaddd">
            <div className="row mt-3">

                <div className="col-md-6 text-center">


                    <div>
                        <h3>Pokemones!</h3>
                        <br />

                        <ul className= "list-group"> 
                            {
                                pokemones.map(item => (
                                    <li 
                                        key={item.name}
                                        className = "list-group-item text-uppercase"
                                        onClick={()=> dispatch(unPokedetalleAccion(item.url))}
                                    >
                                        {item.name}
                                        <button className="btn btn-dark btn-sm float-end"> info</button>
                                    </li>
                                    
                                ))
                            }
                        </ul>

                        <div className="d-flex justify-content-between mt-2">

                            {
                                pokemones.length === 0 && <button onClick={() => dispatch(obtenerPokemonsAction())} className= "btn btn-dark">Obtener</button>
                            }
                            
                            <div className= ".align-content-end">
                                {
                                    previous && <button onClick={()=> dispatch(anteriorPokemonAccion())}className= "btn btn-dark ">anterior</button>
                                }
                            </div>
                            
                            {
                                next && <button onClick={()=> dispatch(siguientePokemonAccion())}className= "btn btn-dark">siguiente</button>
                            }
                            

                        </div>
                        
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <h3>Detalle pokemon</h3>
                    <Detalle/>
                </div>
            </div>
            <div className="mt-5"/>
        </div>
            
            
    )
}

export default Pokemones