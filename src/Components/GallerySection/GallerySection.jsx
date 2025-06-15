import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2>Explora nuestro paraíso</h2>
        <p>Un vistazo a la magia natural y la armonía que nos rodea</p>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-card" key={index}>
            <img src={src} alt={`Galería ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
