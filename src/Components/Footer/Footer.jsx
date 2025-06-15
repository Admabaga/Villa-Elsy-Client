import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Paraíso entre Montañas</h3>
          <p>Villa Elcy, tu destino natural para descansar y reconectar con la naturaleza.</p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p><FaPhoneAlt /> <a href="tel:+573001234567">+57 300 123 4567</a></p>
          <p><FaEnvelope /> <a href="mailto:info@paraiso.com">info@paraiso.com</a></p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://facebook.com/paraiso" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/paraiso" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paraíso entre Montañas - Villa Elcy. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
