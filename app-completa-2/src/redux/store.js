import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pokesReducer from './pokemonDucks'

const rootReducer = combineReducers({
    pokemones: pokesReducer//, //aca se combina todos los reduc'
    //usuarios: usuariosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))//estoo-----------
    return store;
}