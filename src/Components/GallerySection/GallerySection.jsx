import React, { useState } from 'react';
import './GallerySection.css';
import './GalleryModal.css';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

const basePath = "/Images";
const excludeIndices = [8, 21, 24, 25]; 

const imageNames = Array.from({ length: 25 }, (_, i) => {
  const index = i + 13;
  return excludeIndices.includes(index - 12) ? null : `IMG-20250615-WA00${index}.jpg`;
}).filter(Boolean); 

const images = imageNames.map(name => `${basePath}/${name}`);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2>Explora nuestro paraíso</h2>
        <p>Un vistazo a la magia natural y la armonía que nos rodea</p>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => openModal(src)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === 'Enter' && openModal(src)}
          >
            <img
              src={src}
              alt={`Galería ${index + 1}`}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Vista ampliada" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
