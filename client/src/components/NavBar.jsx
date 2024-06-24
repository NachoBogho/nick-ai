import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../sass/component-styles/navbar.scss';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='nav-display'>
      <Link to="/" ><img src="/img/nex-ai-logo.png" alt="Nex AI Logo" /></Link>
      <div className="nav-wrapper">
        <ul className='display-list'>
          <li className="item-list"><Link to="/">Novedades</Link></li>
          <li className="item-list"><Link to="/">Demos</Link></li>
          <li className="item-list"><Link to="/">Contacto</Link></li>
          {isAuthenticated ? (
            <li className="item-list user-menu">
              <span onClick={toggleDropdown} className="user-button">{user.username}</span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/perfil"> <span className='display-img'><img className='img-navbar' src="../../public/assets/user.svg" alt="" /></span>Perfil</Link></li>
                  <li><Link to="/crm"> <span className='display-img'><img className='img-navbar' src="../../public/assets/graph.svg" alt="" /></span>CRM</Link></li>
                  <li><Link to="/" onClick={logout}> <span className='display-img'><img className='img-navbar' src="../../public/assets/logout.svg" alt="" /></span>Cerrar Sesión</Link></li>
                </ul>
              )}
            </li>
          ) : (
            <li className="item-list"><Link to="/iniciar-sesion">Iniciar Sesión</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
