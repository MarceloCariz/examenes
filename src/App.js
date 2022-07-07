import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ExamenLayout from './layouts/ExamenLayout';
import IngresoRut from './pages/IngresoRut';
import Inicio from './pages/Inicio';
import Resultado from './pages/Resultado';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ExamenLayout/>} >
          <Route index element={<Inicio/>}/>
          <Route path='rut' element={<IngresoRut/>}/>
          <Route path='resultado/:rut' element={<Resultado/>}/>
      </Route>
    </Routes>
  
  </BrowserRouter>
  );
}

export default App;
