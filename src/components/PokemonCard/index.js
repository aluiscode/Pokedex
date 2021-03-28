/* eslint-disable react/prop-types */
import React from 'react'
import {
  PokemonCardContainer,
  Image,
  MainName
} from './styles'

export const PokemonCard = ({ name, image }) => {
  return (
    <PokemonCardContainer>
      <Image src={image}/>
      <MainName>{name}</MainName>
    </PokemonCardContainer>
  )
}
