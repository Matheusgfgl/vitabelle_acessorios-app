import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import logoImg from '../../assets/logo.png';


import './styles.css'

export default function HeaderLogout(){  
    
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="pull-right" to="/"><img src={logoImg} width="100" alt="Vitabelle"/></Link>
                    </div>
                    <div className="menu">
                    
                    <div className="collapse navbar-collapse navbar-right" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Pagina Inicial</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contato" className="nav-link">Fale Conosco</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="sobre" className="nav-link">Sobre o Sistema</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                
                </div>
            </nav>
        </div>
    )
}