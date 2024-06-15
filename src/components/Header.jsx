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
           <li><a href="#">Inicio</a></li>
           <li><a href="#">Reservar</a></li>
           <li><a href="#">Menú</a></li>
           <li><a href="#">Contacto</a></li>
         </ul>
       </nav>
     </header>
  );
}

export default Header;