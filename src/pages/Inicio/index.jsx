import { faJsSquare, faHtml5, faReact, faBootstrap, faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Carousel from 'react-multi-carousel' 
import 'react-multi-carousel/lib/styles.css'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { CardSkill } from '../../components/CardSkill'
import { TextRegular } from '../../components/TextRegular'
import { TitleRegular } from '../../components/TitleRegular'
import {DetailCard} from '../../Layout/DetailCard'
import { ContainerContentGeneric, ContainerGeneric } from '../../styles/stylesPadroes'




const Skills = [
  {
    nameSkill:'JavaScript',
    progrees:88,
    icon:faJsSquare
  },
  {
    nameSkill:'ReactNative',
    progrees:97,
    icon:faReact
  },
  {
    nameSkill:'ReactJS',
    progrees:94,
    icon:faReact
  },
  {
    nameSkill:'HTML',
    progrees:100,
    icon:faHtml5
  },
  {
    nameSkill:'BootStrap',
    progrees:80,
    icon:faBootstrap
  },
  {
    nameSkill:'CSS',
    progrees:98,
    icon:faCss3Alt
  },
]

const settings = {
  className: "center",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  nextArrow: <SampleNextArrow  />,
  prevArrow: <SamplePrevArrow />,
 
  centerMode: true,
  centerPadding: "80px",
  
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color:"#000", }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size={'2x'}/>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

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

        <div style={{width:'75%'}}>
          <Slider {...settings}>
            {Skills.map(skill =>{
              return(
                <CardSkill nameSkill={skill.nameSkill} iconName={skill.icon} progressSkill={skill.progrees}/>
              )
            })}
          </Slider>
        </div>

     </ContainerContentGeneric>
    </DetailCard>
  )
}