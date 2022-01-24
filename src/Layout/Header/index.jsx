import {Link } from 'react-router-dom'
import {ButtonRegular} from '../../components/ButtonRegular'
import { ContainerHeader, HeaderMenu } from './style'

export function Header(){
  return(
    <ContainerHeader>
      <HeaderMenu>
        <Link to={'Sobre'} style={{textDecoration:'none'}}>
          <ButtonRegular displayHeader nameButton={'Sobre'} />
        </Link>
        <Link to={'Formacao'} style={{textDecoration:'none'}}>
          <ButtonRegular displayHeader nameButton={'Formacao'}/>
        </Link>
        <Link to={'Projetos'} style={{textDecoration:'none'}}>
          <ButtonRegular displayHeader nameButton={'Projetos'}/>
        </Link>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <ButtonRegular displayHeader nameButton={'Inicio'}/>
        </Link>
    
      </HeaderMenu>
    </ContainerHeader>
  )
}