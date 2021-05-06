import React from 'react'
import { useParams } from 'react-router-dom'

const Civilizacion = () => {

    const {id}= useParams() //toma automatiamente el parametro
    
    const [civilization,setCivilization] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json()
            setCivilization(users)
    
        }
        obtenerDatos()
    }, [id])

    
    return (
        <div>
            <h3>{civilization.name}</h3>
            <p>{civilization.team_bonus}</p>
        </div>
    )
}

export default Civilizacion
