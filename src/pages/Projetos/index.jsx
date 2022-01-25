import { CardProject } from '../../components/CardProject'
import {DetailCard} from '../../Layout/DetailCard'
import {TitleRegular} from '../../components/TitleRegular'

export function Projetos(){
  return(
    <DetailCard>
     <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:'center', width:"100%", height:"auto"}}>
        <TitleRegular textTitle={'Projetos & Trabalhos'}/>
        <div  style={{display:"flex", flexDirection:"row",width:"100%",justifyContent:"space-evenly", alignItems:'center', marginTop:15}}>
          <CardProject/>
          <CardProject/>
        </div>
     </div>
    </DetailCard>
  )
}