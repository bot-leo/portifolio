import { faJsSquare, faHtml5, faReact, faBootstrap, faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Slider from 'react-slick'


import { CardSkill } from '../../components/CardSkill'
import { TextRegular } from '../../components/TextRegular'
import { TitleRegular } from '../../components/TitleRegular'
import {DetailCard} from '../../Layout/DetailCard'
import { ContainerContentGeneric, ContainerGeneric } from '../../styles/stylesPadroes'



export function Inicio(){
  return(
    <DetailCard>
      <ContainerContentGeneric>

        <ContainerGeneric marginTop={'53px'}>
          <TitleRegular textTitle={'Seja Bem Vindo!'}/>
        </ContainerGeneric>

        <ContainerGeneric marginTop={'33px'}>
          <TextRegular dicriptionText={'Olá, sou desenvolvedor Front-End JavaScript web & mobile. Com boas referências de designer, sempre seguindo os principais padrões de UX & UI e design system para um layout mais inteligente e eficiente.Como principal Stack junto ao JS utilizo a biblioteca ReactJS e frameworks CSS para complementar'}/>
        </ContainerGeneric>

        {/* <div style={{width:'75%'}}>
          <Slider {...settings}>
            {Skills.map(skill =>{
              return(
                <CardSkill nameSkill={skill.nameSkill} iconName={skill.icon} progressSkill={skill.progrees}/>
              )
            })}
          </Slider>
        </div> */}

     </ContainerContentGeneric>
    </DetailCard>
  )
}