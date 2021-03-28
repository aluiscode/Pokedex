/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'
import {
  PokemonCardContainer,
  Image,
  MainName
} from './styles'

// Hook
import { useAppContext } from '../../hooks/useAppContext'

export const PokemonCard = forwardRef(({ pokemon }, ref) => {
  const { addPoketPokemon } = useAppContext()

  return (
    <PokemonCardContainer ref={ref} onClick= {() => addPoketPokemon(pokemon)}>
      <Image src={pokemon.sprites.front_default}/>
      <MainName>{pokemon.name}</MainName>
    </PokemonCardContainer>
  )
})
