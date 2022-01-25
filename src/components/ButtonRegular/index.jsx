import { ContainerButton,LinkContainer,TextButton } from './style'

export function ButtonRegular({nameButton, 
                               iconButton,
                               displayHeader,
                               displaySidebar,
                               width,
                               height,
                               fontSize,
                               bold,
                               linkButton}){
  return(
    
      <ContainerButton displayHeader={displayHeader} displaySidebar={displaySidebar} width={width} height={height}>
        <LinkContainer href={linkButton} target="_blank">
        {iconButton ? iconButton : null}
        <TextButton displayHeader={displayHeader} fontSize={fontSize}
                                                  bold={bold}>{nameButton ? 
                                                    nameButton 
                                                    : 'TextButton'}</TextButton>
        </LinkContainer>
      </ContainerButton>
    
  )
}