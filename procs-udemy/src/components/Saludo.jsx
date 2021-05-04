import React from 'react'

const Saludo = (props) => {

    console.log(props)

    return (
        <div>
            <h2>saludando a {props.persona}</h2>
        </div>
    )
}

export default Saludo
