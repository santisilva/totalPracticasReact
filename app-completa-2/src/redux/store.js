import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokesReducer from './pokemonDucks'
import usuarioReducer, {leerUsuarioActivoAccion} from './usuarioDucks'



const rootReducer = combineReducers({
    pokemones: pokesReducer, //aca se combina todos los reduc'
    usuario: usuarioReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))//estoo-----------
    leerUsuarioActivoAccion()(store.dispatch)
    return store;
}