import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/component-styles/login.scss';

const Login = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('email', newEmail);
  };

  return (
    <section className='display-login'>
      <h3>Conoce el poder de Nick AI</h3>
      <p>Regístrate para acceder a nuestro chatbot y experimentar la inteligencia artificial en acción.</p>
      <div className='label-display'>
        <input
          type='email'
          placeholder='Ingresa tu email'
          value={email}
          onChange={handleEmailChange}
        />
        <Link to='/registro' className='btn-1'>Registrate</Link>
      </div>
      <p>
        <Link to='/registro'>Registrate para comenzar</Link>
        <span> | </span>
        <Link to='/terminos-y-condiciones'>Terminos & Condiciones</Link>
      </p>
    </section>
  );
};

export default Login;
