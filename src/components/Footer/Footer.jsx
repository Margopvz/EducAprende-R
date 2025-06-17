import React from 'react'
import './Footer.css'
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className='container-fluid pt-4 pb-2'>
        <div className="row text-center">
          <div className="col ">
            <h5 className="text-white">Navegación</h5>
            <ul id="footer-nav" className="list-unstyled ">
                <li ><Link to={`/`}> <a className="text-decoration-none">Inicio</a> </Link></li>
                <li><Link to={`/categorias`}><a className="text-decoration-none">Juegos</a></Link></li>
                <li><Link to={`/about`}><a className="text-decoration-none">Sobre nosotros</a></Link></li>
                <li><Link to={`/login`}><a className="text-decoration-none">Iniciar Sesión</a></Link></li>
            </ul>
          </div>
          <div className="col">
            <h5 className="text-white">Redes Sociales</h5>
            <ul id="footer-nav" className="list-unstyled ">
                <li ><a className="text-decoration-none" href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                <li><a className="text-decoration-none" href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                <li><a className="text-decoration-none" href="#"><i className="fa-brands fa-github"></i> Github</a></li>
                <li><a className="text-decoration-none" href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>
          <div className="col">
            <h5 className="text-white">Información Adicional</h5>
            <ul id="footer-nav" className="list-unstyled ">
                <li ><a className="text-decoration-none" href="#">Términos y condiciones</a></li>
                <li><a className="text-decoration-none" href="categorias.html">Política de privacidad</a></li>
                <li><a className="text-decoration-none" href="#">Aviso legal</a></li>
            </ul>
          </div>
          <div className="col">
            <h5 className="text-white">Contacto</h5>
            <ul id="footer-nav" className="list-unstyled ">
                <li ><a className="text-decoration-none" href="#">Correo electrónico: Educaprende@gmail.com</a></li>
                <li><a className="text-decoration-none" href="#">Teléfono: +569 13131313</a></li>
                
            </ul>
          </div>
        </div>
        <hr className="text-white"/>
        <p className="text-center text-white">© 2025 EducAprende. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer