import React, { useState, useEffect, useMemo } from 'react'
import {
  SearhContainer,
  InputContainer,
  IconContainer,
  Input
} from './styles'
import { MdSearch } from 'react-icons/md'

// Hooks
import { useAppContext } from '../../hooks/useAppContext'

export const Search = () => {
  const { pokemons, changeFilteredPokemons } = useAppContext()
  const [search, setSearch] = useState('')

  // Filter
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredPokemons = useMemo(() => pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase())), [pokemons, search])

  useEffect(() => {
    changeFilteredPokemons(filteredPokemons)
  }, [filteredPokemons])

  return (
    <SearhContainer>
      <InputContainer>
        <Input type='text' onChange={handleSearchChange}/>
      </InputContainer>
      <IconContainer>
        <MdSearch size='1.5em' color= 'white' />
      </IconContainer>
    </SearhContainer>
  )
}
