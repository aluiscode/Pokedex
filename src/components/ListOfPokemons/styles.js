import styled from 'styled-components'
import { scrollBar } from '../../styles/general'
import { PokemonCardContainer } from '../PokemonCard/styles'

export const ListOfPokemonsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  overflow-y: scroll;
  ${scrollBar};

  ${PokemonCardContainer} {
    flex-shrink: 0;
  }
`
