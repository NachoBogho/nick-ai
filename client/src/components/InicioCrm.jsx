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
        Optimiza la gestión de tus consultas centralizándolas en un solo lugar. Asigna leads a tus vendedores de manera equitativa y automática. Monitorea y analiza el rendimiento de tu equipo en todo momento.
        </p>

        <button className="trial-button">Agenda una Reunion
        </button>
        </div>
        <CardComponent className='card'/>
      </div>
    </div>
  );
}

export default Crm;