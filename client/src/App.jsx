import React from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import TerminosCondiciones from './pages/TerminosCondiciones.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from './pages/ProfilePage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import CrmPage from './pages/CrmPage.jsx';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/info-crm' element={<CrmPage/>}/>
          <Route path="/registro" element={<Register />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/perfil" element={<ProfilePage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
