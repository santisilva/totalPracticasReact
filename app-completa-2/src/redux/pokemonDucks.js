import axios from 'axios'

// constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results:[],
    
}

// types
const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'
const SIGUIENTE_POKE_SUCCESS = 'SIGUIENTE_POKE_SUCCESS'
const ANTERIOR_POKE_SUCCESS = 'ANTERIOR_POKE_SUCCESS'
const EXITO_POKE_SUCCESS = 'EXITO_POKE_SUCCESS'

// reducer
export default function pokesReducer(state = dataInicial, action){
    switch(action.type){
        case GET_POKE_SUCCESS:
            return {...state, ...action.payload}
        case SIGUIENTE_POKE_SUCCESS:
            return {...state, ...action.payload}
        case ANTERIOR_POKE_SUCCESS:
            return {...state, ...action.payload}
        case EXITO_POKE_SUCCESS:
            return {...state, unPokemon: action.payload}
        default:
            return state
    }
}
// actions
export const unPokedetalleAccion = (url='https://pokeapi.co/api/v2/pokemon/1/') => async (dispatch) => {

   
    if(localStorage.getItem(url)){
        dispatch({
            type: EXITO_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(url))
        })
        return
        
    }

    try {
        const res = await axios.get(url)
        dispatch({
            type: EXITO_POKE_SUCCESS,
            payload: {
                nombre: res.data.name,
                foto: res.data.sprites.front_default,
                alto: res.data.height,
                ancho: res.data.weight
            }
        })
        localStorage.setItem(url, JSON.stringify({//para que guardar en el local storage
            
                nombre: res.data.name,
                foto: res.data.sprites.front_default,
                alto: res.data.height,
                ancho: res.data.weight
            
        }))
    } catch (error) {
        console.log(error)
    }
}


export const obtenerPokemonsAction = () => async (dispatch) => {

    //const {offset}= getState().pokemones
    //const offset = getState().pokemones.offset

    if(localStorage.getItem('offset=0')){
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=10`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))//JSON.stringify  transforma todo en un string
    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonAccion = () => async (dispatch,getState) => {


    const next = getState().pokemones.next

    if(localStorage.getItem(next)){
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }
    //const offset = getState().pokemones.offset
    //const siguiente = offset + numero

    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKE_SUCCESS,
            payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
} 

export const anteriorPokemonAccion = () => async (dispatch,getState) => {


    const previous = getState().pokemones.previous
    //const offset = getState().pokemones.offset
    //const siguiente = offset + numero

    if(localStorage.getItem(previous)){
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
        const res = await axios.get(previous)
        dispatch({
            type: ANTERIOR_POKE_SUCCESS,
            payload: res.data
            
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
} 