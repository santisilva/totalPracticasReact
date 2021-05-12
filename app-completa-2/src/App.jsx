import React from 'react'
import Pokemones from './componentes/Pokemones'

import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore()

 return(
   <div>
    <Provider store={store}>
      <Pokemones/>
    </Provider>
   </div>
 )


}

export default App;
