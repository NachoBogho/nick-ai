import React from 'react'
import '../sass/component-styles/info-crm-b.scss'

const InfoCrm = () => {
    return (
        <section className='display-info-crm'>
            <div className='display-title-crm'>
                <img src="../../public/assets/line.svg" alt="line icon" />
                <h3>¿Qué es un CRM?</h3>
                <p>
                    Un CRM (Customer Relationship Management) es una herramienta que gestiona las relaciones y la información de los clientes.
                </p>
            </div>
            <div className='display-title-crm'>
                <img src="../../public/assets/world.svg" alt="world icon" />
                <h3>Importancia</h3>
                <p>
                    Ayuda a mantener y mejorar las relaciones con los clientes, optimizando la comunicación y potenciando las ventas.
                </p>
            </div>
            <div className='display-title-crm'>
                <img src="../../public/assets/building.svg" alt="building icon" />
                <h3>Impacto</h3>
                <p>
                    Un CRM transforma la gestión empresarial, permitiendo un enfoque centrado en el cliente, mejorando la retención y satisfacción del cliente.
                </p>
            </div>
        </section>
    )
}

export default InfoCrm
