import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../sass/component-styles/navbar.scss';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='nav-display'>
      <Link to="/" ><img src="/img/nick-logo.png" alt="Nex AI Logo" /></Link>
      <div className="nav-wrapper">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <ul className={`display-list ${menuOpen ? 'open' : ''}`}>
          <li className="item-list"><Link to="/info-crm">CRM</Link></li>
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
