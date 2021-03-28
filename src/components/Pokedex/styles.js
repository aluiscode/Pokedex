import styled from 'styled-components'

export const PokedexContainer = styled.section`
  height: 85%;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  border: 1px solid #000;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const CameraPokedex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px;
  height: 8%;
  width: calc(100% - 20px);
`

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  border: 1px solid #000;
  margin-left: 5px;
`

export const Camera = styled(Circle)`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.secoundary};
`

export const LuzRed = styled(Circle)`
  background-color: #FA012B;
`

export const LuzYellow = styled(Circle)`
  background-color: #A9940F;
`

export const LuzGreen = styled(Circle)`
  background-color: #316C3A;
`

export const ScreenContainer = styled.div`
  width: 80%;
  height: 82%;
  border: 1px solid #000;
  background-color: #DEDEDE;
  border-radius: 10px;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 30% 50%;
  grid-template-areas:  "pokemon-photo"
                        "pokemon-description";
`

const generalGridContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ScreenPhoto = styled(generalGridContainer)``

export const Image = styled.img``

export const ScreenDescription = styled(generalGridContainer)`
  flex-direction: column;
`

export const MainName = styled.h3`
  color: ${({ theme }) => theme.colors.dark};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const DescriptionPokemon = styled.div`
  width: 100%;
  height: fit-content;
  margin: 10px 0;
`

export const CardFieldValues = styled.div`
  width: calc(100% - 20px);
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`

export const Field = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
`

export const Value = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  &:first-letter {
    text-transform: uppercase;
  }
`
