import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component-styles/login.scss'

const Login = () => {
  return (
    <section className='display-login'>
      <h3>Conoce el poder de Nick AI</h3>
      <p>Regístrate para acceder a nuestro chatbot y experimentar la inteligencia artificial en acción.</p>
      <div className='label-display'>
        <input type='email' placeholder='Ingresa tu email'></input>
        <Link className='btn-1'>Registrate</Link>
      </div>
      <p><Link>Registrate para comenzar</Link> <span> | </span><Link>Terminos & Condiciones</Link></p>
    </section>
  )
}

export default Login
