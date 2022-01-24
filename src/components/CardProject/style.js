import styled from 'styled-components'

export const ContainerCardProject = styled.div`
  width:22vw;
  max-width: 22vw;
  height:58.8vh;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  
  border-style: solid;
  border-width: 3px;
  border-radius: 25px;

  background-color: transparent; 


  @media (max-width:810px) {
    width:17.8vw;
    max-width: 22vw;
    height:38.8vh;

  }
`


export const ContainerImg = styled.div`
  width: 20vw;
  height: 25vh;

  @media (max-width:810px) {
    width:15.8vw;
    max-width: 15vw;
    height:9.5vh;

  }

`
export const ImgDemonstration = styled.img`
  width: 100%;
  height: 25vh;


  background-color: ${props => props.theme.themeLight.colors.purpleLigth};
`

export const ContainerText = styled.div`
  width: 80%;
  height: auto;

`

export const ContainerFooterCard = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  flex-direction: row;

  justify-content: end;
`