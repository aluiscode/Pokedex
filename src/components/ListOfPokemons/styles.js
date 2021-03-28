import styled from 'styled-components'
import { scrollBar } from '../../styles/general'
import { PokemonCardContainer } from '../PokemonCard/styles'

export const ListOfPokemonsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 30px;

  overflow-y: scroll;
  ${scrollBar};

  ${PokemonCardContainer} {
    flex-shrink: 0;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`
