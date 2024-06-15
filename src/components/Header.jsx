import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
     <header className="header">
       <div className="header-logo">
         <img src="imagenes/logo.jpeg" alt="Logo" />
       </div>
       <nav className="header-nav">
         <ul>
           <li><a href="#Home">Inicio</a></li>
           <li><a href="#Reservacion">Reservar</a></li>
           <li><a href="#Menú">Menú</a></li>
           <li><a href="#Contacto">Contacto</a></li>
         </ul>
       </nav>
     </header>
  );
}

export default Header;