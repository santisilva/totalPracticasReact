import React from "react"
import Comentario from "./components/Comentario"
import Saludo from "./components/Saludo"


function App() {
  return (
    <div className= "container mt-5">
      <h1>Proyecto desde 0</h1>
      <Saludo persona="Santiago" edad={30}/>
      <Saludo persona="Juan" edad={23}/>
      <Saludo persona="Miguel" edad={25}/>
      <hr/>
      <h3> Caja de comentarios</h3>
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Ignacio'
        texto='ffffffffffffffffffffff'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Juan'
        texto='qqqqqqqqqqqqqqqqqq'
      />
      <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Pablo'
        texto='llllllllllllllllll'
      />
    </div>
  );
}

export default App;
