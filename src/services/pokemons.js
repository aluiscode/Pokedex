import axios from 'axios'
import { ENDPOINTS } from '../constants'

export const getPokemons = async (next) => {
  const API = next || ENDPOINTS.POKEMONS

  const response = await axios.get(API, {
  })

  const Pokemons = response.data.results.map(pokemon => getPokemon(pokemon.url))

  const PokemonsData = await Promise.all(Pokemons)

  console.log({
    next: response.data.next,
    results: PokemonsData
  })

  return {
    next: response.data.next,
    results: PokemonsData
  }
}

export const getPokemon = async (url) => {
  const response = await axios.get(url)
  return response.data
}
