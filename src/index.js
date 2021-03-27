import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './routes/index'
import { AppContextProvider } from './context/index'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/globalStyle'

const App = () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Router />
      </ThemeProvider>
    </AppContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
