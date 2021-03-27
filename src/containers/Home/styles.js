import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 60px 1fr;
  grid-template-areas:  "search   pokedex"
                        "pokemons pokedex";

  background: ${({ theme }) => theme.background.dark}
`

const generalGridContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchContainer = styled(generalGridContainer)`
  grid-area: search;
`

export const PokemonsContainer = styled(generalGridContainer)`
  grid-area: pokemons;
  height: calc(100% - 20px);
  padding: 10px;
`

export const PokedexContainer = styled(generalGridContainer)`
  grid-area: pokedex;
`
