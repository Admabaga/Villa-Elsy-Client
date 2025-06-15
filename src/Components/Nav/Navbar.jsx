import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div ><a href="/" className="navbar-logo">Paraíso entre Montañas</a></div>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <li><a href="#about" onClick={closeMenu}>Sobre Nosotros</a></li>
                <li><a href="#services" onClick={closeMenu}>Nuestros Servicios</a></li>
                <li><a href="#gallery" onClick={closeMenu}>Galería</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
