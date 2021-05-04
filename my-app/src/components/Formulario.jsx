import React from 'react'

const Formulario = () => {
    
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [listaFrutas,setListaFrutas]= React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()//para que funcione correctamente el onsubmit

        if(!fruta.trim()){//trim me limpia los espacios del campo fruta para que no me aparezca como lleno si solo hay espacios
            console.log("el campo de fruta esta vacio")
            return
        }
        if(!descripcion.trim()){
            console.log("el campo de decripcion esta vacio")
            return
        }
        console.log("cargando...")
        
        /*setListaFrutas([  mi solucion, que no fue la mejor
            ...listaFrutas,
            ...[...fruta,...' ',...descripcion]
        ])*/
        setListaFrutas([  
            ...listaFrutas,
            {nombreFruta: fruta, valorDescripcion: descripcion}
        ])
        e.target.reset()//resetea la imagen de los campos, pero no su valor
        setFruta('') //ahora si reseteamos el valor de la fruta
        setDescripcion('')


        

    }
    
    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos}>
                <input 
                    type= "text"
                    placeholder= "Ingrese fruta"
                    className= "form-control mb-2" 
                    onChange= {(e) => setFruta(e.target.value) }
                />
                <input 
                    type= "text"
                    placeholder= "Ingrese descripción"
                    className= "form-control mb-2" 
                    onChange= {(e) => setDescripcion(e.target.value) } //e.target.value es para setear lo que el usuario escribio 
                
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <ul>
                {
                    listaFrutas.map((item,index) =>(
                        <li key={index}>
                            {item.nombreFruta} - {item.valorDescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
