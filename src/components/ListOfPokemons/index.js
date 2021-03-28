import React from 'react'
import {
  ListOfPokemonsContainer
} from './styles'

// Components
import { EmptyView } from '../EmptyView'
import { PokemonCard } from '../PokemonCard'

// Hooks
import { useAppContext } from '../../hooks/useAppContext'
import { usePokemons } from '../../hooks/usePokemons'

export const ListOfPokemons = () => {
  const { pokemons } = useAppContext()
  const { loading, error } = usePokemons()

  if (loading) {
    <ListOfPokemonsContainer>
      <h1>Loading...</h1>
    </ListOfPokemonsContainer>
  }

  if (pokemons.length === 0) {
    return (
      <ListOfPokemonsContainer>
        <EmptyView/>
      </ListOfPokemonsContainer>
    )
  }

  return (
    <ListOfPokemonsContainer>
      {
        pokemons.map((pokemon) =>
          <PokemonCard
            key={`${pokemon.id}.${pokemon.name}`}
            pokemon={pokemon}
          />)
      }
    </ListOfPokemonsContainer>
  )
}
