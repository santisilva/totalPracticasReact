import React from 'react'

const Variables = () => {

    const saludos = "Hola soy un saludo de variable"
    const imagen = 'https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/06/react-router.png?fit=730%2C412&ssl=1'


    return (
        <div>
            <h2>Nuevo componente {saludos} </h2>
            <img src={imagen} alt=""/>
        </div>
    )
}

export default Variables
