import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonsAction, siguientePokemonAccion,anteriorPokemonAccion} from '../redux/pokemonDucks'

const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    return (
        <div>
            <h1>Pokemones!</h1>
            <br />
            {
                pokemones.length === 0 && <button onClick={() => dispatch(obtenerPokemonsAction())}>Obtener</button>
            }
            {
                next && <button onClick={()=> dispatch(siguientePokemonAccion())}>siguiente</button>
            }
            {
                previous && <button onClick={()=> dispatch(anteriorPokemonAccion())}>anterior</button>
            }
            
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones