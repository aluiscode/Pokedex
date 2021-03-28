/* eslint-disable array-callback-return */
import React, { useState, useRef, useCallback } from 'react'
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

// Import service
import { getPokemons } from '../../services/pokemons'

export const ListOfPokemons = () => {
  const { pokemons, addPokemons, offset, addOffset, filteredPokemons } = useAppContext()
  const { loading } = usePokemons()
  const observer = useRef()
  const lastPokemonRef = useCallback((node) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new window.IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        const res = await getPokemons(offset)
        addPokemons(res.results)
        addOffset()
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, pokemons, offset])

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
                    {
                      filteredPokemons.map((pokemon, index) => {
                        if (pokemons.length === index + 1) {
                          return <PokemonCard
                            ref ={lastPokemonRef}
                            key={`${pokemon.id}.${pokemon.name}`}
                            pokemon={pokemon}
                          />
                        } else {
                          return <PokemonCard
                            key={`${pokemon.id}.${pokemon.name}`}
                            pokemon={pokemon}
                          />
                        }
                      }
                      )
                    }
                    </>
              }
            </>
      }
    </ListOfPokemonsContainer>
  )
}
