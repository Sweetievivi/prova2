import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './compositorio/Home';
import Company from '../../Guardados/WHous';
import Contact from '../../Guardados/FormularioContato';

function App() { 
   return ( 
   <div className="App"> 
    <Menu /> 
    <BrowserRouter> 
    <Routes> 
      <Route path='/' element={<Home />} /> 
      </Routes> 
      </BrowserRouter> 
      <Footer /> 
  </div> 
 );
} 

export default App;