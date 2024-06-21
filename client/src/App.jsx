import React from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx';
import Register from './pages/Register.jsx';
import TerminosCondiciones from './pages/TerminosCondiciones.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>


  );
};

export default App;
