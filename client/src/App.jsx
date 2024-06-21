import React from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import TerminosCondiciones from './pages/TerminosCondiciones.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  return (

    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>


  );
};

export default App;
