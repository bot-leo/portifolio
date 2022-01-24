import styled from 'styled-components'

export const SimpleText = styled.text`
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 1.6rem;

  color:${props => props.theme.themeLight.colors.blackLigth};

  @media(max-width:810px) {
    font-size: 1.8rem;
  }
`