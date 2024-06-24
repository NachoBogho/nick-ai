import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import './App.css';

const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useAuth();

    if (loading) return <div className="loader-container"><div className="loader"></div></div>;

    if (!isAuthenticated) {
        return <Navigate to="/iniciar-sesion" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
