import React from 'react'
import Chat from './Chat.jsx'
import { Link } from 'react-router-dom'
import '../sass/component-styles/try-chat.scss'

const TryChat = () => {
    return (
        <section className='section-display'>
            <div className='title-display'>
                <h3>¡Proba nuestro Chatbot!</h3>
                <p>Proba nuestro chatbot potenciado con AI y descubre cómo puede mejorar la experiencia de tus clientes y aumentar la eficiencia de tu empresa.</p>
            </div>
            <div className='info-display'>
                <Chat className="chat"></Chat>
                <div className='info-chat'>
                    <h6>Asesor online 24/7</h6>
                    <p>Generas un servicio de atención al cliente disponible las 24 horas del día, los 7 días de la semana, mejorando significativamente la satisfacción y la fidelización de tus clientes al estar siempre disponibles para resolver sus inquietudes.</p>
                    <h6>Mejora la experiencia de usuario</h6>
                    <p>Ofrece una experiencia de usuario altamente personalizada, adaptándose a las necesidades individuales de cada cliente, lo que aumenta su satisfacción y lealtad hacia tu empresa.</p>
                    <h6>Automatiza tareas</h6>
                    <p>Automatiza tareas repetitivas como responder preguntas frecuentes, agendar citas y procesar pedidos, permitiendo que tu equipo se enfoque en tareas más complejas y estratégicas.</p>
                    <h6>Reduce los costos</h6>
                    <p>Reduci los costos operativos al disminuir la necesidad de contratar personal adicional para tareas de atención al cliente y otras funciones repetitivas, incrementando la eficiencia y productividad de tu empresa.</p>

                </div>

            </div>

        </section>
    )
}

export default TryChat
