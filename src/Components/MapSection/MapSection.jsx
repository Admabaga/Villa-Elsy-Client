import './MapSection.css';

const MapSection = () => {
  return (
    <section id="maps" className="map-section">
      <h2>Encuéntranos en el mapa</h2>
      <p>Te esperamos en Barbosa, Antioquia</p>
      <div className="map-container">
        <iframe
          title="Ubicación del EcoHotel"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5872555716014!2d-75.33206019320718!3d6.447004798229653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44161ac1462c8b%3A0xee5eff4a443b0618!2sBarbosa%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1750038896066!5m2!1ses!2sco"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
