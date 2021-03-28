import React from 'react'
import {
  PokedexContainer,
  CameraPokedex,
  Camera,
  LuzRed,
  LuzYellow,
  LuzGreen,
  ScreenContainer,
  ScreenPhoto,
  ScreenDescription,
  Image,
  MainName,
  DescriptionPokemon,
  CardFieldValues,
  Field,
  Value
} from './styles'

// Hook
import { useAppContext } from '../../hooks/useAppContext'

export const Pokedex = () => {
  const { poketPokemon } = useAppContext()

  if (!poketPokemon) {
    return (
      <PokedexContainer>
      <CameraPokedex>
        <LuzRed/>
        <LuzYellow/>
        <LuzGreen/>
        <Camera/>
      </CameraPokedex>
      <ScreenContainer>
        Loading...
      </ScreenContainer>
    </PokedexContainer>
    )
  }

  return (
    <PokedexContainer>
      <CameraPokedex>
        <LuzRed/>
        <LuzYellow/>
        <LuzGreen/>
        <Camera/>
      </CameraPokedex>
      <ScreenContainer>
        <ScreenPhoto>
          <Image src={poketPokemon.sprites.front_default} />
        </ScreenPhoto>
        <ScreenDescription>
          <DescriptionPokemon>
            <CardFieldValues>
              <Field>Id</Field>
              <Value>{poketPokemon.id}</Value>
            </CardFieldValues>
            <CardFieldValues>
              <Field>Name</Field>
              <Value>{poketPokemon.name}</Value>
            </CardFieldValues>
            <CardFieldValues>
              <Field>Type</Field>
              <Value>{poketPokemon.types[0].type.name}</Value>
            </CardFieldValues>
            <CardFieldValues>
              <Field>Ability</Field>
              <Value>{poketPokemon.abilities[0].ability.name}</Value>
            </CardFieldValues>
          </DescriptionPokemon>
        </ScreenDescription>
      </ScreenContainer>
    </PokedexContainer>
  )
}
