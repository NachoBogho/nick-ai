import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import '../sass/component-styles/register-form.scss';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {signin} = useAuth();

    const onSubmit = handleSubmit((data) => {
        signin(data);

    });

  return (
     <div className='form-display'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Iniciar Sesion</h2>
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
                <button type="submit">Iniciar Sesion</button>
            </div>
            <div className='display-terms'>
                <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>
        </form>
    </div>
  )
}

export default LoginForm
