import React from 'react'//rafce para codigo base

const Contador = () => {

    const [contador, setContador] = React.useState(0)
    const [texto, setTexto] = React.useState("Apretaste el boton un numero par de veces")

    const accionar = ()=>{
        console.log('click')
        setContador(contador + 1)
        if( (contador+1) %2 === 1){
            setTexto("Apretaste el boton un numero impar de veces")
        }
        else setTexto("Apretaste el boton un numero par de veces")
    }

    return (
        <div>
            <h2>Contador</h2>
            <h3>El numero aumentando: {contador} </h3>
            <button onClick = {accionar
            }>+1</button>
            <h3>{texto}</h3>
            <h3>
                {
                
                ((contador) %2 === 1) ? "Apretaste el boton un numero impar de veces" : "Apretaste el boton un numero par de veces"

                }
            
            </h3>
        </div>
    )
}

export default Contador
