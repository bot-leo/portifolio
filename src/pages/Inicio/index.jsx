import { faJsSquare, faHtml5, faReact, faBootstrap, faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { CardSkill } from '../../components/CardSkill'
import { TextRegular } from '../../components/TextRegular'
import { TitleRegular } from '../../components/TitleRegular'
import {DetailCard} from '../../Layout/DetailCard'
import { ContainerContentGeneric, ContainerGeneric } from '../../styles/stylesPadroes'

import baseSkills from '../../utils/baseSkills'



const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  className: "center",
  centerMode: true,
  centerPadding: "30px",

}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}

export function Inicio(){
  return(
    <DetailCard>
      <ContainerContentGeneric>

        <ContainerGeneric marginTop={'33px'}>
          <TitleRegular textTitle={'Seja Bem Vindo!'}/>
        </ContainerGeneric>

        <ContainerGeneric marginTop={'33px'}>
          <TextRegular dicriptionText={'Olá, sou desenvolvedor Front-End JavaScript web & mobile. Com boas referências de designer, sempre seguindo os principais padrões de UX & UI e design system para um layout mais inteligente e eficiente.Como principal Stack junto ao JS utilizo a biblioteca ReactJS e frameworks CSS para complementar'}/>
        </ContainerGeneric>

        <div style={{ width:'80%', height:"auto", display:'flex', flexDirection:'row', justifyContent:"space-evenly", marginTop:15}}> 
          {/* <Slider {...settings} >
            {baseSkills.map(skill =>{
                  return(
                    <div>
                      <CardSkill nameSkill={skill.nameSkill} iconName={skill.iconSkill} progressSkill={skill.progressSkill}/>
                    </div>
                  )
                })}
          </Slider> */}
          <CardSkill nameSkill={'ReactJS'} iconName={faReact} progressSkill={99}/>
          <CardSkill nameSkill={'ReactNative'} iconName={faReact} progressSkill={100}/>
          <CardSkill nameSkill={'JavaScript'} iconName={faJsSquare} progressSkill={88}/>
        </div>

      
          
          

     </ContainerContentGeneric>
    </DetailCard>
  )
}