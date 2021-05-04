import React,{useState} from 'react'

const Eventos = () => {
    
    const [texto,setTexto] = useState('Texto desde el estado') //recibe 2 parametros, uno es el inicial y el otro es la 
                                                               // funcion con la que vamos a poder modificarlo

    const eventoClick = () => {
        console.log('me pinchaste bien')
        setTexto('Texto modificado mediante un click')
    }

    return ( //El return devuelve solo una cosa, por eso ponemos la etiqueta div para envolver o solo picos vacios <>
             //la diferencia es que el div los engloba yde la otra forma quedan sueltos.   
        <>        
            <hr/>
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()} >Click</button> 
        </>//onClick te crea automaticamente el boton para usar, y le asignamos lo que queremos que haga.

    )
}

export default Eventos
