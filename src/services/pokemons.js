import axios from 'axios'
import { ENDPOINTS } from '../constants'

export const getPokemons = async (offset) => {
  console.log(`${ENDPOINTS.POKEMONS}?offset=${offset}&limit=20`)
  const response = await axios.get(`${ENDPOINTS.POKEMONS}?offset=${offset}&limit=20`)

  const Pokemons = response.data.results.map(pokemon => getPokemon(pokemon.url))

  const PokemonsData = await Promise.allSettled(Pokemons)
  const result = PokemonsData.filter(pokemon => pokemon.status === 'fulfilled').map(pokemon => pokemon.value)

  return {
    next: response.data.next,
    results: result
  }
}

export const getPokemon = async (url) => {
  const response = await axios.get(url)
  return response.data
}
