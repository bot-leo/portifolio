import { MenuSidebar } from "../MenuSideBar"
import { Card, Content } from "./style"



export function DetailCard({children}){
  return(
    <Card>
      <MenuSidebar/>
      <Content>
       {children}
      </Content>
    </Card>
  )
} 
