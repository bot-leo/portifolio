import styled from 'styled-components'

export const ContainerButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: ${props => props.width ? props.width : '9.5vw'};
  max-width:9vw;
 
  height:${props => props.height ? props.height : '5.5vh'};
 

  background-color: ${props => props.displayHeader ? props.theme.themeLight.colors.whiteLight : 'transparent'};
  border-radius:25px;
  
  border-style: ${props => props.displaySidebar ? 'solid' : 'none'};
  border-color: ${props =>  props.displaySidebar ? '3px' : '0'};
  border-color: ${props =>  props.displaySidebar ? props.theme.themeLight.colors.purpleLight : 'none'};
  color: ${props =>  props.theme.themeLight.colors.purpleLight };

  overflow: hidden;

  font-size: 2rem;

  transition: 0.4s;

  :hover{
    background: ${props => props.displayHeader ? props.theme.themeLight.colors.purpleLight : 'none'};
    color: ${props => props.displayHeader ? props.theme.themeLight.colors.whiteLight : props.theme.themeLight.colors.purpleLight};
  }

  @media (max-width:810px) {
      height: 3vh;
  }
`
export const TextButton = styled.text`
  font-family: 'Poppins', sans-serif;
  font-size: ${props => props.fontSize ? props.fontSize : '1.8rem'};
  font-weight: ${props => props.bold ? 'bold' : 'none'};
`