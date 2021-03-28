import styled from 'styled-components'

export const PokemonCardContainer = styled.article`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.colors.dark};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secoundary};
  }
`

export const Image = styled.img``

export const MainName = styled.h3`
  color: ${({ theme }) => theme.colors.white};

  &:first-letter {
    text-transform: uppercase;
  }
`
