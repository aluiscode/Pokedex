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

  return (
    <ListOfPokemonsContainer>
      {
        pokemons.length === 0
          ? <EmptyView/>
          : pokemons.map((pokemon, i) => <PokemonCard key={i} />)
      }
    </ListOfPokemonsContainer>
  )
}
