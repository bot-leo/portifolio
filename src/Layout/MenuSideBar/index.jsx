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
                                   />}
                                   linkButton={'https://github.com/bot-leo'}/>
        <ButtonRegular displaySidebar 
                       nameButton={'Linkedin'} 
                       iconButton={<FontAwesomeIcon 
                                    icon={faLinkedin} 
                                   />}
                       linkButton={'https://www.linkedin.com/in/leonardo-lima-de-souza/'}/>
        <ButtonRegular displaySidebar 
                       nameButton={'Whats'} 
                       iconButton={<FontAwesomeIcon 
                                    icon={faWhatsappSquare} 
                                   />}
                            linkButton={'https://api.whatsapp.com/send?phone=5511910679181'}/>
        
      </ContainerButtons>
    </ContainerSidebar>
  )
}