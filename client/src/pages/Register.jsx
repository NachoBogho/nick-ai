import React from 'react'
import RegisterForm from '../components/RegisterForm'
import '../sass/pages-styles/register-page.scss'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='display-title'>
      <div className='bg-form'>
      <RegisterForm className='form' />
      <div className='der-display'>
        <h4>¡Estas a un paso de potenciar tu negocio!</h4>
        <h5>Con tu cuenta de usuario podrás acceder a todas las funcionalidades de la plataforma </h5>
        <div>
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/iniciar-sesion">Inicia sesión</Link>

        </div>

      </div>
      </div>
  
    </div>

  )
}

export default Register

