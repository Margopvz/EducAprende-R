import React, { useEffect } from 'react';
import './Navbar.css';
import '@fontsource/coiny'; 
import { initNavbarBehavior } from './Navbar';

const Navbar = () => {
    useEffect(() => {
        initNavbarBehavior();
    }, []);
    
    return (
    <>
    <nav className="navbar coiny-title navbar-expand-lg navbar-custom">
        <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <div className="brand-box">
                    <span>Educ</span><span style={{ color: '#ffffff' }}>Aprende</span>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <a className="nav-link" href="categorias.html">Categorías</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="juegos.html">Juegos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="about.html">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link user-icon" href="#">
                <i className="bi bi-person-fill"></i>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    
    <button
        id="scrollTopBtn"
        className="scroll-top-btn rounded-circle shadow"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
        <i className="bi bi-arrow-up" style={{ fontSize: '1.5rem' }}></i>
    </button>
    </>
    );
};

export default Navbar;