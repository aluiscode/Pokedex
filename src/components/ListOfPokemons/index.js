import React from 'react'
import {
  ListOfPokemonsContainer
} from './styles'

// Components
import { EmptyView } from '../EmptyView'
import { PokemonCard } from '../PokemonCard'
import { Loader } from '../Loader'

// Hooks
import { useAppContext } from '../../hooks/useAppContext'
import { usePokemons } from '../../hooks/usePokemons'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

export const ListOfPokemons = () => {
  const { pokemons } = useAppContext()
  const { loading } = usePokemons()

  return (
    <ListOfPokemonsContainer>
      {
        loading
          ? <Loader/>
          : <>
              {
                pokemons.length === 0
                  ? <EmptyView/>
                  : <>
                    { pokemons.map((pokemon) =>
                        <PokemonCard
                          key={`${pokemon.id}.${pokemon.name}`}
                          pokemon={pokemon}
                        />)
                    }
                    </>
              }
            </>
      }
    </ListOfPokemonsContainer>
  )
}
