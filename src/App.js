import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Personal from './pages/personal/Personal';
import Calendario from './pages/calendario/Calendario';
import Home from './pages/home/Home';
import Tareas from './pages/tareas/Tareas';
import Categorias from './pages/categorias/Categorias'
import AddCategoria from './pages/categorias/AddCategoria';
import Graficos from './pages/graficos/Graficos';



function App() {
  return (
<React.Fragment>
  
  <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path='/personal' element={<Personal/>}/>
    <Route path='/calendario' element={<Calendario/>}/>
    <Route path='/tareas' element={<Tareas/>}/>
    <Route path='/categorias' element={<Categorias />}/>
    <Route path='/addcategorias' element={<AddCategoria />}/>
    <Route path='/graficos' element={<Graficos />}/>
   
    </Routes>
  </BrowserRouter>
</React.Fragment>
    
  );
}

export default App;
