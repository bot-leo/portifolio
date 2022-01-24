import { TextRegular } from '../../components/TextRegular'
import { TitleRegular } from '../../components/TitleRegular'
import {DetailCard} from '../../Layout/DetailCard'
import { ContainerRegular, ContainerRegularSimple, ContainerSimple } from './style'

export function Formacao(){
  return(
    <DetailCard>
      <ContainerRegularSimple>
        <TitleRegular textTitle={'Minha Formacao'}/>
   
    <ContainerRegular>
        
        <ContainerSimple>
          <TextRegular dicriptionText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit adipiscing elit commodo sit egestas risus. Morbi mi urna viverra augue nec, sit risus. Aliquam proin ornare aenean massa.'}/>
        </ContainerSimple>
        <ContainerSimple>
          <TextRegular dicriptionText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit adipiscing elit commodo sit egestas risus. Morbi mi urna viverra augue nec, sit risus. Aliquam proin ornare aenean massa.'}/>
        </ContainerSimple>
        <ContainerSimple>
          <TextRegular dicriptionText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit adipiscing elit commodo sit egestas risus. Morbi mi urna viverra augue nec, sit risus. Aliquam proin ornare aenean massa.'}/>
        </ContainerSimple>
        <ContainerSimple>
          <TextRegular dicriptionText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit adipiscing elit commodo sit egestas risus. Morbi mi urna viverra augue nec, sit risus. Aliquam proin ornare aenean massa.'}/>
        </ContainerSimple>
        <ContainerSimple>
          <TextRegular dicriptionText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit adipiscing elit commodo sit egestas risus. Morbi mi urna viverra augue nec, sit risus. Aliquam proin ornare aenean massa.'}/>
        </ContainerSimple>
        </ContainerRegular>
      </ContainerRegularSimple>
    </DetailCard>
  )
}