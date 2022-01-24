import styled from 'styled-components'

export const ContainerGeneric = styled.div`
  margin-top: ${props => props.marginTop ? props.marginTop : 0};

  display: flex;

  width: auto;
  height: auto;
`

export const ContainerContentGeneric = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-inline:75px;

  align-items: center;

`