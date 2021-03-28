import React from 'react'
import {
  ListOfPokemonsContainer
} from './styles'

// Components
import { EmptyView } from '../EmptyView'

// Hooks
import { useAppContext } from '../../hooks/useAppContext'

export const ListOfPokemons = () => {
  const { pokemons } = useAppContext()

  return (
    <ListOfPokemonsContainer>
      {
        pokemons.length === 0 && <EmptyView/>
      }
    </ListOfPokemonsContainer>
  )
}
