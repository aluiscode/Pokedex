import { useState, useEffect } from 'react'
import { useAppContext } from './useAppContext'

// Services
import { getPokemons } from '../services/pokemons'

export const usePokemons = () => {
  const { addPokemons } = useAppContext()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [next, setNext] = useState(null)

  useEffect(async () => {
    const res = await getPokemons(next)
    setNext(res.next)
    addPokemons(res.results)
  }, [])

  return { loading, error }
}
