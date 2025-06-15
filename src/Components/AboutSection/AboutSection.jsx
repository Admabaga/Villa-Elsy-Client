import React from 'react';
import './AboutSection.css';
import { FaLeaf, FaTree, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-header">
                <h2>Conecta con la Naturaleza</h2>
                <p>Descubre el alma de <strong>EcoHotel Raíces Vivas</strong></p>
            </div>

            <div className="about-content">
                <div className="about-image" />
                <div className="about-text">
                    <p>
                        En un mundo que corre sin pausa, nace un refugio que respira con la tierra.
                        EcoHotel Raíces Vivas no es solo un lugar para descansar, es un lugar para renacer.
                        Nos rodea la naturaleza, nos impulsa la sostenibilidad y nos mueve el bienestar de quienes nos visitan.
                    </p>
                    <p>
                        Ubicado en un entorno natural privilegiado, te ofrecemos una experiencia donde la comodidad se encuentra con el cuidado del planeta.
                        Nuestro compromiso es contigo, con la comunidad y con el futuro.
                    </p>
                </div>
            </div>

            <div className="about-values">
                <div className="value-card">
                    <FaLeaf className="icon" />
                    <h4>Sostenibilidad</h4>
                    <p>Vivimos en armonía con el entorno, minimizando nuestra huella ecológica con prácticas responsables.</p>
                </div>
                <div className="value-card">
                    <FaLightbulb className="icon" />
                    <h4>Innovación Verde</h4>
                    <p>Creamos soluciones modernas sin renunciar a la esencia natural que nos inspira.</p>
                </div>
                <div className="value-card">
                    <FaHandsHelping className="icon" />
                    <h4>Impacto Social</h4>
                    <p>Construimos comunidad impulsando proyectos de desarrollo local y conciencia ambiental.</p>
                </div>
                <div className="value-card">
                    <FaTree className="icon" />
                    <h4>Conexión con la Tierra</h4>
                    <p>Cada espacio está diseñado para que sientas la calma de la naturaleza en cada paso.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
