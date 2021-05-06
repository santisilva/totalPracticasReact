import React from "react"
import {firebase} from './firebase'



function App() {

  const [tareas,setTareas]= React.useState([])
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

  return (
    <div className="container mt-3">
      <div className="row">
      <div className="col-md-6">
        lista tareas
        <ul className="list-group">
          {
          tareas.map(item => (
            <li className="list-group-item" key={item.id} >
              {item.name}
            </li>
          ))
          }
        </ul>
      </div>
      <div className="col-md-6">
        formulario
      </div>
      </div>
      
    </div>
  );
}

export default App;
