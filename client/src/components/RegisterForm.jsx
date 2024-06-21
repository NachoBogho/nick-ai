import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';
import '../sass/component-styles/register-form.scss';

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (values) => {
        if (values.password !== values.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        values.number = parseInt(values.number, 10);

        try {
            const res = await registerRequest(values);
            console.log('Registro exitoso:', res.data);
        } catch (error) {
            if (error.response) {
                console.error('Error en la respuesta:', error.response.data);
                alert(`Error: ${error.response.data.error[0] || 'Algo salió mal'}`);
            } else {
                console.error('Error:', error.message);
                alert('Error de red o del servidor');
            }
        }
    };

    return (
        <div className='form-display'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Registro</h2>
                <div className='form-sec'>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input
                        placeholder="ejemplo1"
                        type="text"
                        id="username"
                        {...register('username', { required: "El nombre de usuario es obligatorio" })}
                    />
                    {errors.username && <p className='error' >{errors.username.message}</p>}
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
                        autoComplete="password"
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
                        <input className='terms-checkbox' type="checkbox" {...register('terms', { required: "Debe aceptar los términos y condiciones" })} /> Acepto los <Link to="/terms-and-conditions" target="_blank"> Términos & Condiciones</Link>
                    </label>
                    {errors.terms && <p className='error'>{errors.terms.message}</p>}
                </div>
                <div className='form-sec'>
                    <button type="submit">Registrarse</button>
                </div>
                <div className='display-terms'>
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
