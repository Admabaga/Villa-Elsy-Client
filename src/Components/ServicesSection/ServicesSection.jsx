import React, { useState } from 'react';
import './ServicesSection.css';

const services = [
  {
    title: "Alojamiento Sostenible",
    description: "Cabañas ecológicas confortables y conectadas con la naturaleza.",
    icon: "/Images/Alojamientos.png",
    details: (
      <ul>
        <li><strong>Día de sol:</strong> $40.000 COP por persona</li>
        <li><strong>Amanecida:</strong> $90.000 COP por noche</li>
        <li><strong>Cabaña familiar (4 personas):</strong> $300.000 COP</li>
        <li><strong>Incluye:</strong> Desayuno orgánico, acceso a zonas verdes</li>
      </ul>
    )
  },
  {
    title: "Piscinas Naturales",
    description: "Piscinas con agua de manantial, perfectas para relajarte.",
    icon: "/Images/Piscina.png",
    details: (
      <ul>
        <li><strong>Adultos:</strong> $25.000 COP</li>
        <li><strong>Niños (5-12 años):</strong> $15.000 COP</li>
        <li><strong>Incluye:</strong> Acceso a zona húmeda, duchas ecológicas</li>
        <li><strong>Horario:</strong> 9:00 a.m. - 5:00 p.m.</li>
      </ul>
    )
  },
  {
    title: "Gastronomía Consciente",
    description: "Comida orgánica local con un toque tradicional.",
    icon: "/Images/Gastronomia.png",
    details: (
      <ul>
        <li><strong>Desayuno:</strong> $15.000 COP</li>
        <li><strong>Almuerzo típico:</strong> $28.000 COP</li>
        <li><strong>Cena ligera:</strong> $20.000 COP</li>
        <li><strong>Opciones vegetarianas y veganas disponibles</strong></li>
      </ul>
    )
  },
  {
    title: "Senderismo & Ecoturismo",
    description: "Recorridos guiados por senderos naturales, cascadas y miradores.",
    icon: "/Images/Senderismo.png",
    details: (
      <ul>
        <li><strong>Duración:</strong> 1 a 3 horas</li>
        <li><strong>Valor por persona:</strong> desde $20.000 COP</li>
        <li><strong>Incluye:</strong> guía local, hidratación natural</li>
      </ul>
    )
  },
  {
    title: "Salón Social & Eventos",
    description: "Espacio natural para celebraciones, talleres y reuniones.",
    icon: "/Images/Eventos.png",
    details: (
      <ul>
        <li><strong>Capacidad:</strong> Hasta 100 personas</li>
        <li><strong>Incluye:</strong> mobiliario, sonido básico, zona verde</li>
        <li><strong>Valor por jornada:</strong> desde $350.000 COP</li>
      </ul>
    )
  },
  {
    title: "Bienestar & Spa Natural",
    description: "Terapias de relajación con elementos naturales.",
    icon: "/Images/SPa.png",
    details: (
      <ul>
        <li><strong>Masaje relajante:</strong> $60.000 COP (45 min)</li>
        <li><strong>Yoga grupal:</strong> $20.000 COP por persona</li>
        <li><strong>Incluye:</strong> aceites esenciales, música natural</li>
      </ul>
    )
  }
];

const ServicesSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Servicios del EcoHotel</h2>
        <p>Conecta con la naturaleza a través de nuestras experiencias únicas</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => setSelected(service)}
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content animated" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn top-right" onClick={() => setSelected(null)}>&times;</button>
            <img src={selected.icon} alt={selected.title} className="modal-icon" />
            <h3>{selected.title}</h3>
            {selected.details}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
