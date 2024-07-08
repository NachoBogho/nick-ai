import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest, verifyToken } from '../api/auth';
import Cookies from 'js-cookie';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('useAuth debe estar dentro del proveedor AuthContext');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);



    const updateUser = async (formData) => {
        try {
            const response = await axios.post('http://localhost:3000/api/profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            setUser(response.data); // Actualiza el estado del usuario con los datos recibidos
        } catch (error) {
            console.error("Error actualizando el perfil del usuario", error);
        }
    };

    const signup = async (user) => {
        if (user.password !== user.confirmPassword) {
            setErrors(['Las contraseñas no coinciden']);
            return;
        } else if (user.password.length !== 6) {
            setErrors(['La contraseña debe tener 6 caracteres']);
            return;
        }

        user.number = parseInt(user.number, 10);

        try {
            const res = await registerRequest(user);
            console.log('Registro exitoso:', res.data);
            setUser(res.data);
            setIsAuthenticated(true);
            setErrors([]);
        } catch (error) {
            const errorMessages = error.response?.data || ['Error en el registro'];
            setErrors(Array.isArray(errorMessages) ? errorMessages : [errorMessages]);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log('Inicio de sesión exitoso:', res.data);
            setUser(res.data);
            setIsAuthenticated(true);
            setErrors([]);
        } catch (error) {
            const errorMessages = error.response?.data?.message || ['Error en el inicio de sesión'];
            setErrors([errorMessages]);
        }
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const token = Cookies.get('token');

            if (!token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res = await verifyToken(token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                } else {
                    setUser(res.data);
                    setIsAuthenticated(true);
                    setLoading(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
                setLoading(false);
                setUser(null);
            }
        }
        checkLogin();
    }, []);

    const logout = () => {
        Cookies.remove('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <authContext.Provider value={{ signup, signin, updateUser, logout, user, isAuthenticated, errors, loading }}>
            {children}
        </authContext.Provider>
    );
};
