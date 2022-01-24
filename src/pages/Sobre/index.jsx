import { TextRegular } from '../../components/TextRegular'
import { TitleRegular } from '../../components/TitleRegular'
import {DetailCard} from '../../Layout/DetailCard'
import { ContainerContentGeneric, ContainerGeneric } from '../../styles/stylesPadroes'

export function Sobre(){
  return(
    <DetailCard>
        
       <ContainerContentGeneric>
         <ContainerGeneric marginTop={'23px'}>
          <TitleRegular textTitle={'Sobre Mim'}/>
         </ContainerGeneric>

         <ContainerGeneric marginTop={'15px'}>
          <TextRegular dicriptionText={'Sou um grande entusiasta da Tecnologia aonde a paixão vem desde pequeno. Durante o ensino médio cursei informática na Etec, onde tive meu primeiro contato com linguagens de programação e como funcionava a Web. Atualmente recém-formado em Ciências da Computação venho construindo uma carreira no mundo da programação como desenvolvedor web e mobile, utilizando o javaScript com React para a construção de Front-End sólidos e padronizados, além disso tenho uma bagagem solida de projetos, com uma margem de 3 a 4 anos de experiencia.'}/>
          <TextRegular dicriptionText={'Além de Desenvolvedor, também sou Designer de interface seguindo princípios e fundamentos de UI & UX para criação de layouts inteligentes e padronizados. Mas como dev não estou limitado apenas ao meu Stack principal. Meu conhecimento abrange toda a área de tecnologias do mercado atual e já pude trabalhar com diversas ferramentas, tendo versatilidade entre elas, seja no front com AngularJS, Bootstrap, Wordpress, NextJS, JQuery e etc, ou em outras áreas como Banco de dados, mySql, SQLServe e etec. E até mesmo em diferentes linguagens como Java, PHP e Python.'}/>
         </ContainerGeneric>
          
       </ContainerContentGeneric>
    </DetailCard>
  )
}