import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router";
import { initNavbarBehavior } from './Navbar.js';

const Navbar = () => {
    useEffect(() => {
        initNavbarBehavior();
    }, []);
    
    return (
    <>
    <nav className="navbar coiny-title navbar-expand-lg navbar-custom">
        <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
                <div className="brand-box">
                    <Link to={`/`} className='text-decoration-none'><span> Educ</span><span style={{ color: '#ffffff' }}>Aprende</span></Link>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <Link to={`/categorias`} className="nav-link">Categorías</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/juegos/timelgame`} className="nav-link">TimeLGame</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/about`} className="nav-link">Nosotros</Link>
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link user-icon">
                <i className="bi bi-person-fill"></i>
                </Link>
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