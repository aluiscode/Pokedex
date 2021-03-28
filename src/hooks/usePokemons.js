import { useState, useEffect } from 'react'
import { useAppContext } from './useAppContext'

// Services
import { getPokemons } from '../services/pokemons'

export const usePokemons = () => {
  const { addPokemons, addPoketPokemon, addOffset } = useAppContext()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await getPokemons()
      addPokemons(res.results)
      addPoketPokemon(res.results[0])
      addOffset()
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }, [])

  return { loading, error }
}
