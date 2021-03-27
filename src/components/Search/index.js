import React from 'react'
import {
  SearhContainer,
  InputContainer,
  IconContainer,
  Input
} from './styles'
import { MdSearch } from 'react-icons/md'

export const Search = () => {
  return (
    <SearhContainer>
      <InputContainer>
        <Input type='text' />
      </InputContainer>
      <IconContainer>
        <MdSearch size='1.5em' color= 'white' />
      </IconContainer>
    </SearhContainer>
  )
}
