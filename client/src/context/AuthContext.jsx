import { createContext, useState, useContext } from 'react'
import { registerRequest } from '../api/auth';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('useAuth debe estar dentro del proveedor AuthContext');
    }
    return context;

}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signup = async (user) => {
        if (user.password !== user.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        user.number = parseInt(user.number, 10);

        try {
            const res = await registerRequest(user);
            console.log('Registro exitoso:', res.data);
            setUser(res.data);
            setIsAuthenticated(true);

        } catch (error) {
            if (error.response) {
                console.error('Error en la respuesta:', error.response.data);
                alert(`Error: ${error.response.data.error[0] || 'Algo salió mal'}`);
            } else {
                console.error('Error:', error.message);
                alert('Error de red o del servidor');
            }
        }
    }
    return (
        <authContext.Provider value={{ signup, user, isAuthenticated}}>
            {children}
        </authContext.Provider>
    )
}