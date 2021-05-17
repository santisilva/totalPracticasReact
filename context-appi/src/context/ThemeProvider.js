import React from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {

    const themes = {
        color: '#000000',
        background: '#000000'
    }
    const [theme, setTheme] = React.useState(themes)

    React.useEffect(()=>{
        if(localStorage.getItem('themeLocal')){
            const themeLocal = JSON.parse(localStorage.getItem('themeLocal'))
            setTheme(themeLocal)
        }
    },[])
    const cambioColor = color =>{
        setTheme(color)
        localStorage.setItem('themeLocal', JSON.stringify(color))

    }

    return (
        <ThemeContext.Provider value={{theme, cambioColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider