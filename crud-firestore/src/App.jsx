import React from "react"
import {firebase} from './firebase'



function App() {

  const [tareas,setTareas]= React.useState([])
  const [tarea,setTarea]= React.useState('')
  const [modoEdicion,setModoEdicion]= React.useState(false)
  const [id,setId]= React.useState('')
  React.useEffect(()=>{

    const obtenerDatos = async () =>{

      try {
        
        const db = firebase.firestore()
        const data = await db.collection('tareas').get()
        const arrayData = data.docs.map(unDoc => ({id: unDoc.id, ...unDoc.data() }))//... es para sacar la info de dentro del objeto que esta y quede a un mismo nivel que el id
        console.log(arrayData)
        setTareas(arrayData)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  },[])

  const agregar = async (e) => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log("error por vacio")
      return
    }

   // setTareas(e.value)
  

   try {
    const db = firebase.firestore()
    const nuevaTarea= {
      name: tarea,
      fecha: Date.now()
    }

    const data = await db.collection('tareas').add(nuevaTarea)

    setTareas([
      ...tareas,
      {...nuevaTarea, id: data.id}
    ])

    setTarea('')

    } catch (error) {
    console.log(error)
    }
  }

  const editar = unaTarea =>{
    //console.log(unaTarea)
    setModoEdicion(true)
    setTarea(unaTarea.name)
    setId(unaTarea.id)
  }

  const editarDatos = async (e) => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log("error por vacio")
      return
    }
    const db = firebase.firestore()
    await db.collection('tareas').doc(id).update({name: tarea})
    setTareas(tareas.map(unaTarea => unaTarea.id===id ? {id:unaTarea.id, name:tarea, fecha:unaTarea.fecha}:unaTarea))
    setId('')
    setModoEdicion(false)
    setTarea('')
  }

  const eliminar= async (id) => {

  const db = firebase.firestore()
  try {
    await db.collection('tareas').doc(id).delete()
    const arrayFiltrado = tareas.filter(unaTarea => unaTarea.id !== id )
    setTareas(arrayFiltrado)

  } catch (error) {
    console.log(error)
  }
  


  }



  return (
    <div className="container mt-3">
      <div className="row">
      <div className="col-md-6">
        <h4>Lista de tareas</h4>
        <ul className="list-group">
          {
          tareas.map(item => (
            <li className="list-group-item" key={item.id} >
              {item.name}
              <button 
              className="btn btn-danger btn-sm float-end"
              onClick={() => eliminar(item.id) }
              >Eliminar
              </button>
              <button 
              className="btn btn-warning btn-sm float-end mx-2"
              onClick={() => editar(item) }
              >Editar
              </button>
            </li>
          ))
          }
        </ul>
      </div>
      <div className="col-md-6">
       <h4>{modoEdicion?"Editar Tarea":"AgregarTarea"}</h4>
       <form onSubmit={modoEdicion?editarDatos:agregar}> 
         <input 
         type="text"
         placeholder="ingrese tarea"
         className= "form-control mb-2" //clase de boostrap
         onChange= {e=> setTarea(e.target.value)}
         value={tarea}
         />
         <button
          className= {modoEdicion?"btn btn-warning btn-block":"btn btn-dark btn-block"}
          type="submit"
         >{modoEdicion?"Editar":"Agregar"}</button>

       </form>
      </div>
      </div>
      
    </div>
  );
}

export default App;
