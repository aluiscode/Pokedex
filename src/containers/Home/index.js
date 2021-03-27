import React from 'react'
import {
  HomeContainer,
  SearchContainer,
  PokedexContainer,
  PokemonsContainer
} from './styles'

// Components
import { Search } from '../../components/Search'

export const Home = () => {
  return (
    <HomeContainer>
      <SearchContainer>
        <Search/>
      </SearchContainer>
      <PokemonsContainer>
        <h1>Hello World</h1>
      </PokemonsContainer>
      <PokedexContainer>
        {}
      </PokedexContainer>
    </HomeContainer>
  )
}
