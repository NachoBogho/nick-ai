import React from 'react'
import '../sass/pages-styles/term-cond.scss'

const TerminosCondiciones = () => {
    return (
        <div className='display-terminos'>
            <h1>Términos y Condiciones de Nick AI</h1>
            <div className='intro'>
                <h3>Introducción</h3>
                <p>Bienvenido a Nick AI. Estos Términos y Condiciones rigen el uso de nuestros servicios y productos, incluyendo nuestros asistentes virtuales avanzados potenciados por IA. Al utilizar nuestros servicios, usted acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con estos Términos, no debe utilizar nuestros servicios.</p>
            </div>
            <div className='servicios'>
                <h3>Servicios</h3>
                <p>Nick AI ofrece soluciones de asistentes virtuales avanzados diseñados para optimizar las operaciones empresariales y mejorar la experiencia del cliente. Nuestros servicios incluyen, pero no se limitan a:</p>
                <ul>
                    <li><span>Integración de Asistentes Virtuales: </span>Implementamos asistentes virtuales personalizados que se integran con sus sistemas existentes.</li>
                    <li><span>Soporte Técnico: </span>Proporcionamos asistencia técnica continua para asegurar el funcionamiento óptimo de nuestros asistentes virtuales.</li>
                    <li><span>Personalización de Funciones:</span>Adaptamos nuestras soluciones para satisfacer las necesidades específicas de su negocio.</li>
                    <li><span>Actualizaciones y Mantenimiento:</span> Ofrecemos actualizaciones periódicas y mantenimiento para mejorar y asegurar nuestros servicios.
                    </li>
                </ul>
            </div>
            <div className='uso-servicio'>
                <h3>Uso de los Servicios</h3>
                <p><span>Acceso:</span>Usted debe registrarse para obtener una cuenta y acceder a nuestros servicios. Es responsable de mantener la confidencialidad de su cuenta y contraseña, y de todas las actividades que ocurran bajo su cuenta.</p>
                <p><span>Licencia de Uso:</span>Nick AI le otorga una licencia limitada, no exclusiva e intransferible para utilizar nuestros servicios de acuerdo con estos Términos y Condiciones.</p>
                <p><span>Restricciones:</span>Usted se compromete a no utilizar nuestros servicios para actividades ilegales, no autorizadas o prohibidas por estos Términos, incluyendo pero no limitado a:</p>
                <ul>
                    <li><span>Ingeniería Inversa:</span>No puede descompilar, desensamblar ni aplicar ingeniería inversa a nuestros servicios.</li>
                    <li><span>Reventa:</span>No puede vender, alquilar, arrendar, sublicenciar, distribuir ni transferir de otro modo nuestros servicios a terceros.</li>
                    <li><span>Uso Malintencionado: </span>No puede utilizar nuestros servicios para enviar spam, realizar ataques cibernéticos o cualquier otra actividad malintencionada.</li>
                </ul>
            </div>
            <div className="prop-intelectual">
                <h3>Propiedad Intelectual</h3>
                <p>Todos los derechos de propiedad intelectual sobre nuestros servicios, incluyendo software, tecnología, contenidos y marcas, son propiedad exclusiva de Nick AI o sus licenciantes. Usted no tiene derecho a utilizar estos derechos de propiedad intelectual excepto en la forma permitida por estos Términos.</p>
            </div>
            <div className="priv-datos">
                <h3>Privacidad y Datos</h3>
                <p><span>Recopilación de Datos: </span>Recopilamos y utilizamos datos personales de acuerdo con nuestra Política de Privacidad, que forma parte integral de estos Términos y Condiciones. Esto incluye datos proporcionados por usted al registrarse y al utilizar nuestros servicios.</p>
                <p><span>Protección de Datos: </span>Implementamos medidas de seguridad adecuadas para proteger sus datos personales contra accesos no autorizados, alteraciones, divulgaciones o destrucción. Estas medidas incluyen el uso de cifrado, firewalls y controles de acceso seguros.</p>
            </div>
            <div className="lim-priv">
                <h3>Garantías y Limitaciones de Responsabilidad</h3>
                <p><span>Garantía Limitada: </span>Nick AI proporciona sus servicios “tal cual” y “según disponibilidad”. No garantizamos que nuestros servicios estarán libres de errores, interrupciones, ni que se corregirán todos los defectos.</p>
                <p><span>Limitación de Responsabilidad: </span>En ningún caso Nick AI será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos o uso, resultantes del uso de nuestros servicios, incluso si hemos sido informados de la posibilidad de tales daños.</p>
            </div>
            <div className='mod'>
                <h3>Modificaciones</h3>
                <p>Nick AI se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Le notificaremos de cualquier cambio significativo a través de nuestro sitio web o mediante correo electrónico. Su uso continuado de nuestros servicios después de tales modificaciones constituye su aceptación de los nuevos Términos y Condiciones. Le recomendamos que revise regularmente estos Términos para estar al tanto de cualquier cambio.</p>
            </div>
            <div className='terminacion'>
                <h3>Terminación</h3>
                <p>Podemos suspender o terminar su acceso a nuestros servicios en cualquier momento y por cualquier motivo, incluyendo, pero no limitado a, su incumplimiento de estos Términos y Condiciones. Usted puede también terminar su cuenta en cualquier momento contactándonos a través de los canales de soporte. Tras la terminación, cesarán inmediatamente sus derechos de uso de nuestros servicios.</p>
            </div>
            <div className='ley-apl'>
                <h3>Ley Aplicable</h3>
                <p>Estos Términos y Condiciones se rigen por las leyes del país en el que está establecida Nick AI, sin dar efecto a sus disposiciones sobre conflictos de leyes. Usted acepta someterse a la jurisdicción exclusiva de los tribunales de dicho país para la resolución de cualquier disputa que surja en relación con estos Términos.</p>
            </div>
        </div>
    )
}

export default TerminosCondiciones
