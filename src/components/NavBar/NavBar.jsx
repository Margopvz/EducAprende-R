import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { initNavbarBehavior } from './Navbar.js';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext); // suscritos al contexto para acceder a los datos del usuario
  

    useEffect(() => {
        initNavbarBehavior();
    }, []);
    
    return (
    <>
    <nav className="navbar coiny-title navbar-expand-lg navbar-custom">
        <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center">
                <div className="brand-box ms-2">
                    <Link to={`/`} className='text-decoration-none nav-logo'><span> EducAprende</span></Link>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <Link to={`/categorias`} className="nav-link">Juegos</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/about`} className="nav-link">Nosotros</Link>
                </li>
                
                {!user ? (
                    
                    <li className="nav-item">
                        <Link to="/login" className="nav-link user-icon">
                        <i className="bi bi-person-fill"></i></Link>
                    </li>): 
                    (<>
                    <li className="nav-item">
                        <Link to={`/perfil`} className="nav-link">Perfil</Link>
                    </li>
                    
                    <li className="nav-item">
                    <button onClick={logout} className="nav-link user-icon">
                        <i className="fa-solid fa-user-slash"></i>
                        </button></li></>)}
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