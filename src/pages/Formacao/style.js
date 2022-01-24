import styled from 'styled-components'


export const ContainerRegularSimple = styled.div`
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const ContainerSimple = styled.div`
  width: 80%;
  height: auto;

  border-style: solid;
  border-radius: 25px;
  border-color: ${props => props.theme.themeLight.colors.purpleLight};
  border-width: 3px;

  display: flex;

  justify-content: center;
  align-items: center;

  padding-inline: 15px;
  padding-block: 10px;

  margin-top: 20px;
  
  

`

export const ContainerRegular = styled.div`
  overflow-y: scroll;
  

  display:flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height:100%;

  padding-block: 5px;

  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
   
    
  }


`