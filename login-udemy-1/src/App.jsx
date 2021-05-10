import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Loginn from './components/Loginn';
import Navbar from './components/Navbar';
import Admin from './components/Admin';

import {auth} from './firebase'

function App() {

  const [firebaseUser,setFirebaseUser] = React.useState(false)

  React.useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  },[])

  return firebaseUser !== false?(
    <Router>
      <div className="container">
      <Navbar firebaseUser= {firebaseUser}/>
        <Switch>

            <Route path="/" exact>
              inicio...
            </Route>
            <Route path="/login">
              <Loginn/>
            </Route>
            <Route path="/admin">
              <Admin/>
            </Route>

        </Switch>
        
      </div>
    </Router>
  ) :(
    <p>loading..</p>
  
  );
}

export default App;
