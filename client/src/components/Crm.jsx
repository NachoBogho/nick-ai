import React from 'react';
import CardComponent from './CardComponent';
import '../sass/component-styles/info-crm.scss';

function Crm() {
  return (
    <div className="crm">
      <div className="container">
        <div className='title'>
        <h1>Experimenta el Poder del CRM de Nick IA</h1>
        <p>
          Regístrate para acceder a las demos gratuitas y descubre cómo nuestro CRM
          potenciado por IA puede transformar tus relaciones con los clientes y
          impulsar el crecimiento de tu negocio.
        </p>

        <button className="trial-button">Agenda una Reunion
        </button>
        </div>
        <CardComponent/>
      </div>
    </div>
  );
}

export default Crm;