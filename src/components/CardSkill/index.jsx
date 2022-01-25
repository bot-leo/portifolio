import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { TextRegular } from '../TextRegular'
import { ContainerCard } from './style'

export function CardSkill({iconName, nameSkill, progressSkill}){
  return(
    <ContainerCard>
      {iconName ? <FontAwesomeIcon icon={iconName} size={'3x'}/> : null}

      <TextRegular dicriptionText={nameSkill} center/>

     
      <div style={{ width: '5vw', height: 'auto' }}>
        <CircularProgressbar value={progressSkill} text={`${progressSkill}%`} 
                            styles={buildStyles({
          textSize: '2rem',
          fontFamily:'Poppins',
          pathColor:'#210140',
          textColor: '#210140',
          trailColor: '#a68da7'})}/>
      </div>
    </ContainerCard>
  )
}