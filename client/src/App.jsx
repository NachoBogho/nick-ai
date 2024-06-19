import React from 'react';
import Inicio from './components/Inicio.jsx';
import NavBar from './components/NavBar.jsx';
import TryChat from './components/TryChat.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <NavBar />
        <Inicio/>
        <About/>
        <TryChat/>
        <Login/>
        <Footer/>
      </div>  
    </Router>
    
  );
};

export default App;
