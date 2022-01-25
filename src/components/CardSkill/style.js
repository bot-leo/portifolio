import styled from 'styled-components'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar'


export const ContainerCard = styled.div`
  width: 11vw;
  height:35vh;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  border-style: solid;
  border-color:${props => props.theme.themeLight.colors.purpleLight};
  border-width: 3px;
  border-radius: 25px;

  color:${props => props.theme.themeLight.colors.purpleLight};
`



export const ProgreeCircular = styled(CircularProgressbar).attrs(props => ({
  
    textSize: '16px',
    pathColor: `${props => props.theme.themeLight.colors.purpleLight}`,
    textColor: `${props => props.theme.themeLight.colors.purpleLight}`,
    trailColor: '#d6d6d6',
  
}))``

