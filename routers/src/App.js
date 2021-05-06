import React from 'react'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 // NavLink
} from "react-router-dom";
import Civilizacion from './components/Civilizacion';

function App() {

  return (
    <Router>
    <div className="container">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark">
          Inicio
        </Link>
        <Link to="/nosotros" className="btn btn-dark">{/* en to va la misma ruta que en el path */}
          Nosotros
        </Link>
        <Link to="/contacto" className="btn btn-dark">
          Contacto
        </Link>

      </div>
      <h1>navbar</h1>
      <hr/>
      <Switch>
        <Route path="/nosotros/:id">{/* :id tomara cualquier valor, el cual despues debemos tratar como queramos  */}
          <Civilizacion/>
        </Route>
        <Route path="/contacto"> {/* con route y la etiqueta path se pued configurar una nueva ruta para el navegador*/}
          <Contacto/>
        </Route>
        <Route path="/nosotros" exact> 
          <Nosotros/>
        </Route>
        <Route path="/" exact> {/* este path tambien podria estar vacio*/}
          <Inicio/>
        </Route>
        <Route path="" > {/* este path tambien podria estar vacio*/}
         <h2>Ruta no encontrada</h2>
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
