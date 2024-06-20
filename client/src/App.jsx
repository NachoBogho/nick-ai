import React from 'react';
import NavBar from './components/NavBar.jsx';
import Index from './pages/Index.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

const App = () => {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          
        </Routes>
      </BrowserRouter>
    </>


  );
};

export default App;
