/* eslint-disable react/prop-types */
import React from 'react'
import {
  PokemonCardContainer,
  Image,
  MainName
} from './styles'

// Hook
import { useAppContext } from '../../hooks/useAppContext'

export const PokemonCard = ({ pokemon }) => {
  const { addPoketPokemon } = useAppContext()

  return (
    <PokemonCardContainer onClick= {() => addPoketPokemon(pokemon)}>
      <Image src={pokemon.sprites.front_default}/>
      <MainName>{pokemon.name}</MainName>
    </PokemonCardContainer>
  )
}
