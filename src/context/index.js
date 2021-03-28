import React, { useState } from 'react'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [poketPokemon, setPoketPokemon] = useState(null)

  const addPokemons = payload => {
    setPokemons(prev => [...prev, ...payload])
  }

  const addPoketPokemon = payload => {
    setPoketPokemon(payload)
  }

  return (
    <AppContext.Provider
      value={{
        pokemons,
        addPokemons,
        poketPokemon,
        addPoketPokemon
      }}
      >
      {children}
    </AppContext.Provider>
  )
}
