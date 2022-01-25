import styled from 'styled-components'

export const Card = styled.div`
  width: 85%;
  max-width: 85%;
  height: 80vh;
  background-color: ${props => props.theme.themeLight.colors.whiteLight};

  border-radius:35px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  @media (max-width:810px) {
    height: 45vh;
  }
`

export const Content = styled.section`
  width: 75%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;


  border-radius: 25px;
`