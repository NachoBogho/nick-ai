import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component-styles/inicio.scss'

const Inicio = () => {
    return (
        <section className='display-inicio'>
            <div className='inicio-container'>
                <div className='inicio-info'>
                    <h1>Asistentes Virtuales Potenciados por IA</h1>
                    <p>Nick IA ofrece asistentes virtuales avanzados potenciados por IA para ayudar a las empresas a optimizar sus operaciones y mejorar las experiencias de los clientes.</p>
                    <div className='display-botones'>
                        <Link to="/" className='btn-1'>Comenzar</Link>
                        <Link to="/" className='btn-2'>Más información</Link>
                    </div>
                </div>

                <img src='/img/chat-index.png' alt='Ejemplo de chat de Nex AI' />
            </div>

        </section>
    )
}

export default Inicio

