import { ContainerButton,TextButton } from './style'

export function ButtonRegular({nameButton, 
                               iconButton,
                               displayHeader,
                               displaySidebar,
                               width,
                               height,
                               fontSize,
                               bold}){
  return(
    
      <ContainerButton displayHeader={displayHeader} displaySidebar={displaySidebar} width={width} height={height}>
        {iconButton ? iconButton : null}
        <TextButton displayHeader={displayHeader} fontSize={fontSize}
                                                  bold={bold}>{nameButton ? 
                                                    nameButton 
                                                    : 'TextButton'}</TextButton>
      </ContainerButton>
    
  )
}