import React from 'react'
import './App.css';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import Materias from './pages/Materias'
import CadastroAluno from './pages/CadastroAluno'
import CadastroMateria from './pages/CadastroMateria'
import EdicaoAluno from './pages/EdicaoAluno'
import EdicaoMateria from './pages/EdicaoMateria';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
    <Routes>
      <Route path="/alunos"element={<Alunos/>}/>
      <Route path="/materias"element={<Materias/>}/>
      <Route path="/cadastroAluno"element={<CadastroAluno/>}/>
      <Route path="/cadastroMateria"element={<CadastroMateria/>}/>
      <Route path="/edicaoAluno"element={<EdicaoAluno/>}/>
      <Route path="/edicaoMateria"element={<EdicaoMateria/>}/>


      

    </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App