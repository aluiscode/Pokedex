import React from 'react'
import {
  HomeContainer,
  SearchContainer,
  PokedexContainer,
  PokemonsContainer
} from './styles'

// Components
import { Search } from '../../components/Search'
import { ListOfPokemons } from '../../components/ListOfPokemons'
import { Pokedex } from '../../components/Pokedex'

export const Home = () => {
  return (
    <HomeContainer>
      <SearchContainer>
        <Search/>
      </SearchContainer>
      <PokemonsContainer>
        <ListOfPokemons/>
      </PokemonsContainer>
      <PokedexContainer>
        <Pokedex/>
      </PokedexContainer>
    </HomeContainer>
  )
}
