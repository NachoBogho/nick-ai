import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'




const Login = () => {

    return (
        <div className='display-title-l'>
            <div className='bg-form-l'>
                <LoginForm className='form' />
                <div className='der-display'>
                    <h4>¡Bienvenido de vuelta!</h4>
                    <h5>Accede a tu cuenta para continuar</h5>
                    <div>
                        <p>¿No tienes una cuenta?</p>
                        <Link to="/registro">Registrarse</Link>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login
