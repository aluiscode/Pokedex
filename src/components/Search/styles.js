import styled from 'styled-components'

export const SearhContainer = styled.article`
  width: 220px;
  height: 35px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 35px;
  grid-template-areas: 'input icon';
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 17px;
`

const generalGridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled(generalGridContainer)`
  grid-area: input;
  justify-content: flex-end;
`

export const Input = styled.input`
  width: 88%;
  height: 70%;
  resize: none;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white}
`

export const IconContainer = styled(generalGridContainer)`
  grid-area: icon;
`
