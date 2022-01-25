import {   
         Routes,
         Route, Navigate } from 'react-router-dom'

import { Header } from '../Layout/Header'

import { Inicio } from '../pages/Inicio'
import {Formacao} from '../pages/Formacao'
import {Projetos} from '../pages/Projetos'
import {Sobre} from '../pages/Sobre'

import { ConatinerPrincipal, Content } from './style'

import '../styles/styleGlobal.css'

export default function App() {
  return (
    <Content>
      <ConatinerPrincipal>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />}/> 
        <Route path="/portifolio" element={<Navigate to="/" />}/> 
        <Route path="formacao" element={<Formacao />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
      </ConatinerPrincipal>
    </Content>
  );
}


