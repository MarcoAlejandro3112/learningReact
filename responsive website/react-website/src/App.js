import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home.js';
import Register from './components/register.js';
import Header from './components/header.js';
import Seguimiento from './components/seguimiento.js';
import SeguimientoDelete from './components/seguimientoDelete.js';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/seguimiento/:id" element={<Seguimiento/>}/>
          <Route path="/seguimiento/delete/:id" element={<SeguimientoDelete/>}/>
       </Routes>
    </div>
  );
}

export default App;
