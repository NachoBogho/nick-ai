import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component-styles/navbar.scss'


const NavBar = () => {
  return (
    <nav className='nav-display'>
        <Link to="/" ><img src="/img/nex-ai-logo.png" alt="Nex AI Logo" /></Link>
        <div className="nav-wrapper">
            <ul className='display-list'>

                <li className="item-list"><Link to="/">Novedades</Link></li>
                <li className="item-list"><Link to="/">Demos</Link></li>
                <li className="item-list"><Link to="/">Contacto</Link></li>
                <li className="item-list"><Link to="/">Iniciar Sesion</Link></li>
            </ul>
        </div>
      
    </nav>
  )
}

export default NavBar
