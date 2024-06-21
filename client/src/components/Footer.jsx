import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component-styles/footer.scss'


const Footer = () => {
  return (
    <div className='display-footer'>
       <p> © 2024 Nick AI | Todos los Derechos Reservados </p>
       <nav className='display-nav'>
        <Link to="/terminos-y-condiciones">Terminos & Condiciones</Link>
        <Link to="#">Trabaja con Nosotros</Link>
        <Link to="#">Contacto</Link>
       </nav>

    </div>
  )
}

export default Footer
