// Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Proyectos</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>Sobre mí</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
