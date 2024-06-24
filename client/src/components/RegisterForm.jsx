import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import '../sass/component-styles/register-form.scss';

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const onSubmit = async (values) => {
        await signup(values);
    };

    return (
        <div className='form-display'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Registro</h2>
                {registerErrors.length > 0 && registerErrors.map((error, i) => (
                    <p key={i} className='error'>{error}</p>
                ))}
                <div className='form-sec'>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input
                        placeholder="ejemplo1"
                        type="text"
                        id="username"
                        {...register('username', { required: "El nombre de usuario es obligatorio" })}
                    />
                    {errors.username && <p className='error'>{errors.username.message}</p>}
                </div>
                <div className='form-sec'>
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="ejemplo1@gmail.com"
                        type="email"
                        id="email"
                        autoComplete="new-email"
                        {...register('email', { required: "El correo electrónico es obligatorio" })}
                    />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>
                <div className='form-sec'>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        placeholder="Escribe tu contraseña"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        {...register('password', { required: "La contraseña es obligatoria" })}
                    />
                    {errors.password && <p className='error'>{errors.password.message}</p>}
                </div>
                <div className='form-sec'>
                    <label htmlFor="confirmPassword">Repetir Contraseña:</label>
                    <input
                        placeholder="Repite tu contraseña"
                        type="password"
                        id="confirmPassword"
                        autoComplete="new-password"
                        {...register('confirmPassword', { required: "Repetir la contraseña es obligatorio" })}
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                </div>
                <div className='form-sec'>
                    <label htmlFor="number">Celular:</label>
                    <input
                        placeholder="Escribe tu número de celular"
                        type="tel"
                        id="number"
                        {...register('number', { required: "El número de celular es obligatorio", valueAsNumber: true })}
                    />
                    {errors.number && <p className='error'>{errors.number.message}</p>}
                </div>
                <div className='display-terms'>
                    <label className='term-label'>
                        <input className='terms-checkbox' type="checkbox" {...register('terms', { required: "Debe aceptar los términos y condiciones" })} /> Acepto los <Link to="/terms-and-conditions" target="_blank">Términos & Condiciones</Link>
                    </label>
                    {errors.terms && <p className='error'>{errors.terms.message}</p>}
                </div>
                <div className='form-sec'>
                    <button type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
