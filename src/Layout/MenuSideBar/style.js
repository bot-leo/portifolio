import styled from 'styled-components'

export const ContainerSidebar = styled.aside`
 width:25vw;
 max-width: 25vw;
 height: 80vh;
 border-radius: 25px;

 border-bottom-right-radius: 0;
 border-top-right-radius: 0;
 border-right-width: 2px;
 border-color: ${props => props.theme.themeLight.colors.purpleLight};
 border-right-style: solid;


 display: flex;
 flex-direction: column;

 justify-content: space-around;
 align-items: center;

 @media (max-width:810px) {
      height: 100%;
  }
 `

 export const ContainerAvatarUser = styled.div`
  width: 15vw;
  max-width: 16vw;
  height:30vh;
  /* width: 170px;
  height: 170px; */

  background-color: ${props => props.theme.themeLight.colors.purpleLight};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius : 50%;

  @media (max-width:810px) {
    width: 15vw;
    max-width: 16vw;
    height: 13vh;
  }
 `

 export const AvatarUser = styled.img`
  width: 90%;
  height:90%;
  /* width: 158px;
  height: 158px; */

 
 `


export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`


export const ContainerButtons = styled.div`
   width: 100%;
   height: 25%;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
`