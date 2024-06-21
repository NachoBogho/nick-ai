import React from 'react'
import RegisterForm from '../components/RegisterForm'
import '../sass/pages-styles/register-page.scss'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='display-title'>
      <RegisterForm />
      <div className='display-right'>
        <div>
          <h5>¡Estas a un paso de potenciar tu negocio!</h5>
          <h6>Con tu cuenta de usuario podrás acceder a todas las funcionalidades de la plataforma  </h6>

        </div>
        <div>
          <p>¿Ya tienes una cuenta? </p>
          <Link to="/">Inicia Sesion</Link>
        </div>

      </div>
    </div>

  )
}

export default Register

