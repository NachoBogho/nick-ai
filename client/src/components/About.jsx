import React from 'react'
import '../sass/component-styles/about.scss'

const About = () => {
    return (
        <section className='about-display'>
                <div className='title-display'>
                <h3>Características clave</h3>
                <p>Los asistentes virtuales de Nick IA están diseñados para agilizar las operaciones de tu negocio y mejorar las experiencias de los clientes.</p>
                </div>
                <div className='content-display'>
                        <div className='items-display'>
                                <div className='item'>
                                        <h4>NLP Avanzado</h4>
                                        <p>Nuestros asistentes virtuales utilizan NLP avanzado para comprender y responder a consultas en lenguaje natural.</p>
                                </div>
                                <div className='item'>
                                        <h4>Interacciones Personalizadas</h4>
                                        <p>Los asistentes virtuales de Nick IA están entrenados para proporcionar respuestas personalizadas y contextuales.</p>
                                </div>
                                <div className='item'>
                                        <h4>Integración sin problemas</h4>
                                        <p>Nuestros asistentes virtuales se pueden integrar fácilmente en tus sistemas y flujos de trabajo empresariales existentes.</p>
                                </div>
                        </div>
                        <img src="/img/map.webp" alt="Red neuronal de Nick AI" />

                </div>
        
            
        </section>
    )
}

export default About
