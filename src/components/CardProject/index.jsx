import { TextRegular } from '../TextRegular'
import { ContainerCardProject, 
          ContainerFooterCard, 
          ContainerImg, 
          ContainerText, 
          ImgDemonstration } from './style'

import ImgProject1 from '../../assets/demonstrationProject1.png'
import { ButtonRegular } from '../ButtonRegular'

export function CardProject(){
   return(
     <ContainerCardProject>

       <ContainerImg>
        <ImgDemonstration src={ImgProject1}/>
       </ContainerImg>
      

      <ContainerText>
       <TextRegular dicriptionText={'Lorem ipsum, consectetur adipiscing elit. Vitae rhoncus malesuada risus in faucibus tincidunt enim blandit. Ut etiam facilisis blandit eget dictum odio facilisis sagittis non.'}/>
      </ContainerText>
      

      <ContainerFooterCard>
        <ButtonRegular displaySidebar 
                      nameButton={'Mais'}
                      width={'5.3vw'}
                      height={'3.3vh'}
                      fontSize={'1.4rem'}
                      bold />
      </ContainerFooterCard>

     </ContainerCardProject>
   )
 }