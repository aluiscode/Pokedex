import React, { useState } from 'react'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])

  const addPokemons = payload => {
    setPokemons(prev => [prev, ...payload])
  }

  return (
    <AppContext.Provider
      value={{
        pokemons,
        addPokemons
      }}
      >
      {children}
    </AppContext.Provider>
  )
}
