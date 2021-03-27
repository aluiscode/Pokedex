import React from 'react'
import {
  ListOfPokemonsContainer
} from './styles'

import { useAppContext } from '../../hooks/useAppContext'

export const ListOfPokemons = () => {
  const { pokemons } = useAppContext()

  return (
    <ListOfPokemonsContainer>

    </ListOfPokemonsContainer>
  )
}
