import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component-styles/ejemplo-crm.scss'

const EjemploCrm = () => {
    return (
        <section className='section-ejemplo-crm'>
            <h1>Nuestro CRM </h1>
            <nav className='navbar-crm'>
                <div className='logo-crm'>
                    <img src="../../public/img/nick-logo-b.png" alt="logo" />
                    <h4>Nick IA</h4>
                </div>
                <div className='list-crm'>
                    <ul>
                        <li><Link>Mensajes</Link></li>
                        <li><img src="../../public/assets/user.svg" alt="user icon" /></li>
                    </ul>
                </div>
            </nav>
            <div className='info-box-crm'>
                <div className='box-crm'>
                    <h5>Usuarios Totales</h5>
                    <p>Todos los clientes de la plataforma</p>
                    <p><span>1378</span></p>
                </div>
                <div className='box-crm'>
                    <h5>Usuarios Activos</h5>
                    <p>Usuarios activos en la ultima semana</p>
                    <p><span>849</span></p>
                </div>
                <div className='box-crm'>
                    <h5>Nuevos Usuarios</h5>
                    <p>Nuevas inteacciones con el chatbot</p>
                    <p><span>137</span></p>
                </div>
            </div>
            <div className='customers-list'>
                <nav className='customer-nav'>
                    <h5>Lista de Clientes</h5>
                    <p>Administra a todos tus clientes</p>
                    <div className='barra-nav'>
                        <input type="search" placeholder='Buscar clientes...' />
                        <button> + Agregar Cliente </button>
                    </div>
                </nav>

                <div className='customer-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Estado</th>
                                <th>Numero Telefonico</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sergio</td>
                                <td>sergio@gmail.com</td>
                                <td>En pausa</td>
                                <td>+54 911 34760923</td>
                                <td className='display-btn'>
                                    <button><img src="../../public/assets/edit.svg" alt="edit icon" /></button>
                                    <button><img src="../../public/assets/trash.svg" alt="trash icon" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Carlos</td>
                                <td>carlos@gmail.com</td>
                                <td>Activo</td>
                                <td>+56 2 2715 5149</td>
                                <td className='display-btn'>
                                    <button><img src="../../public/assets/edit.svg" alt="edit icon" /></button>
                                    <button><img src="../../public/assets/trash.svg" alt="trash icon" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Laura</td>
                                <td>laura@gmail.com</td>
                                <td>Inactivo</td>
                                <td>+34 912 945 238</td>
                                <td className='display-btn'>
                                    <button><img src="../../public/assets/edit.svg" alt="edit icon" /></button>
                                    <button><img src="../../public/assets/trash.svg" alt="trash icon" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='customer-info'>
                    <div className='customer-title'>
                        <h5>Perfil del Cliente</h5>
                        <p>Informacion detallada del cliente</p>
                    </div>
                    <div className='display-info-box'>
                        <div className="contact-info">
                            <h5>Informacion de Contacto</h5>
                            <p>Nombre: <span>Sergio</span></p>
                            <p>Correo: <span>sergio@gmail.com</span></p>
                            <p>Telefono: <span>+54 911 34760923</span></p>
                        </div>
                        <div className="history-com">
                            <h5>Historial de comunicacion con el cliente</h5>
                            <p>Ultimo mensaje: <span>Hace 2 dias</span></p>
                            <p>Ultima llamada: <span>Hace 1 semana</span></p>
                            <p>Ultima reunion: <span> Hace 3 meses</span></p>
                        </div>
                        <div className="chat-interaction">
                            <h5>Interacciones del Chatbot</h5>
                            <p>Chatbots Totales: <span>23</span></p>
                            <p>Duracion Promedio: <span> 3:54 min</span></p>
                            <p>Calificacion: <span>4.57</span></p>
                        </div>
                    </div>
                    <div className='tags-display'>
                        <h5>Tags</h5>
                        <div className='tags'>
                            <p>Empresa</p>
                            <p>VIP</p>
                            <p>Referido</p>
                        </div>
                        <div className='display-btn-profile'>
                            <Link to='/'><img src="../../public/assets/edit.svg" alt="" />Editar Perfil</Link>
                            <Link to='/'><img src="../../public/assets/line.svg" alt="" />Ver Estadisticas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EjemploCrm