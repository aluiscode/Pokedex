import React, { useState } from 'react'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])

  return (
    <AppContext.Provider
      value={{
        pokemons
      }}
      >
      {children}
    </AppContext.Provider>
  )
}
