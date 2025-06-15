import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Paraíso entre Montañas</h1>
          <h2>Villa Elcy</h2>
          <p>Sumérgete en una experiencia eco-sostenible donde la naturaleza y el bienestar se encuentran.</p>
          <a href="#about" className="hero-button">Descubre más</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
