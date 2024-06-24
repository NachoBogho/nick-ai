import { createContext, useState, useContext } from 'react';
import { registerRequest, loginRequest } from '../api/auth';

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
            setErrors([]); // Limpiar errores después de un registro exitoso
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
            setErrors([]); // Limpiar errores después de un inicio de sesión exitoso
        } catch (error) {
            const errorMessages = error.response?.data?.message || ['Error en el inicio de sesión'];
            setErrors([errorMessages]);
        }
    };

    return (
        <authContext.Provider value={{ signup, signin, user, isAuthenticated, errors }}>
            {children}
        </authContext.Provider>
    );
};
