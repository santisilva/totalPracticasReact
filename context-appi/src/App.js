import React from 'react'
import ThemeProvider from './context/ThemeProvider'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )
}

export default App