import axios from 'axios'
import { ENDPOINTS } from '../constants'

export const getPokemons = async (offset) => {
  console.log(`${ENDPOINTS.POKEMONS}?offset=${offset}&limit=20`)
  const response = await axios.get(`${ENDPOINTS.POKEMONS}?offset=${offset}&limit=20`)

  const Pokemons = response.data.results.map(async pokemon => await getPokemon(pokemon.url))

  const PokemonsData = await Promise.all(Pokemons)

  return {
    next: response.data.next,
    results: PokemonsData
  }
}

export const getPokemon = async (url) => {
  console.log(url)
  const response = await axios.get(url)
  return response.data
}
