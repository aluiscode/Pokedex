import React from 'react'
import {
  EmptyViewContainer,
  Image
} from './styles'

// Images
import INoData from '../../assets/images/data_not_found.png'

export const EmptyView = () => {
  return (
    <EmptyViewContainer>
      <Image src={INoData} alt='There is no data' />
      <h1>There is not data</h1>
    </EmptyViewContainer>
  )
}
