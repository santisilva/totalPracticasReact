import React from "react"
import Saludo from "./components/Saludo"


function App() {
  return (
    <div className= "container mt-5">
      <h1>Proyecto desde 0</h1>
      <Saludo persona="Santiago"/>
      <Saludo persona="Juan"/>
      <Saludo persona="Miguel"/>
    </div>
  );
}

export default App;
