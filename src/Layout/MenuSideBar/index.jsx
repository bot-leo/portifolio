import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'


import { AvatarUser, 
         ContainerInfo, 
         ContainerSidebar, 
         ContainerButtons, 
         ContainerAvatarUser } from './style'

import { ButtonRegular } from '../../components/ButtonRegular'
import { TextRegular } from '../../components/TextRegular'

import Avatar from '../../assets/user-perfil.png'

export function MenuSidebar(){
  return(
    <ContainerSidebar>
      <ContainerAvatarUser>
        <AvatarUser src={Avatar} alt="Imagem pessoal" className='TesteImg'/>
      </ContainerAvatarUser>
      <ContainerInfo>
        <TextRegular dicriptionText={'Leonardo Lima De Souza'}/>{'\n'}
        <TextRegular dicriptionText={'Desenvolvedor Web & Mobile'}/>{'\n'}
        <TextRegular dicriptionText={'Itaqua, Sao Paulo Brasil'}/>
      </ContainerInfo>
      <ContainerButtons>
        <ButtonRegular displaySidebar 
                       nameButton={'GitHub'} 
                       iconButton={<FontAwesomeIcon 
                                    icon={faGithub} 
                                   />}/>
        <ButtonRegular displaySidebar 
                       nameButton={'Linkedin'} 
                       iconButton={<FontAwesomeIcon 
                                    icon={faLinkedin} 
                                   />}/>
        <ButtonRegular displaySidebar 
                       nameButton={'Whats'} 
                       iconButton={<FontAwesomeIcon 
                                    icon={faWhatsappSquare} 
                                   />}/>
        
      </ContainerButtons>
    </ContainerSidebar>
  )
}