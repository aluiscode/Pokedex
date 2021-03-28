import React, { useState } from 'react'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [poketPokemon, setPoketPokemon] = useState(null)
  const [offset, setOffset] = useState(0)

  const addPokemons = payload => {
    setPokemons(prev => [...prev, ...payload])
  }

  const addPoketPokemon = payload => {
    setPoketPokemon(payload)
  }

  const addOffset = () => {
    setOffset(offset + 20)
  }

  return (
    <AppContext.Provider
      value={{
        pokemons,
        addPokemons,
        poketPokemon,
        addPoketPokemon,
        offset,
        addOffset
      }}
      >
      {children}
    </AppContext.Provider>
  )
}
