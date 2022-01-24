import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,rgba(33,1,64, 0.2),rgba(128, 0, 255,0.2));
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  padding: 0;
  margin: 0;
`
export const ConatinerPrincipal = styled.div`
 width: 100%;
 height: 90vh;

 display: flex;
 flex-direction: column;

 justify-content: space-between;
 align-items: center;

 @media (max-width:810px) {
      height: 60vh;
  }
`