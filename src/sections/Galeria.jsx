import '../styles/Galeria.css';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useClickContext } from "../context/ClickContext";

export default function Galeria() {
  const [images] = useState([
    {
      id: 1,
      src: '/src/Galeria/g1.jpg',
      title: 'Diseño Exclusivo 1',
      description: 'Camiseta con diseño urbano moderno'
    },
    {
      id: 2,
      src: '/src/Galeria/g2.jpg',
      title: 'Diseño Exclusivo 2',
      description: 'Estampado artístico limitado'
    },
    {
      id: 3,
      src: '/src/Galeria/g3.jpg',
      title: 'Diseño Exclusivo 3',
      description: 'Edición especial aniversario'
    },
    {
      id: 4,
      src: '/src/Galeria/g4.jpg',
      title: 'Diseño Exclusivo 4',
      description: 'Colección de verano'
    },
    {
      id: 5,
      src: '/src/Galeria/g5.jpg',
      title: 'Diseño Exclusivo 5',
      description: 'Serie inspirada en arte callejero'
    },
    {
      id: 6,
      src: '/src/Galeria/g6.jpg',
      title: 'Diseño Exclusivo 6',
      description: 'Edición especial aniversario'
    }
  ]);

  const [selectedImageIdx, setSelectedImageIdx] = useState(null);
  const { addClick } = useClickContext();

  // Navegación modal
  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Accesibilidad: cerrar modal con ESC
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIdx !== null) {
        if (e.key === 'Escape') setSelectedImageIdx(null);
        if (e.key === 'ArrowLeft') handlePrev(e);
        if (e.key === 'ArrowRight') handleNext(e);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [selectedImageIdx]);

  return (
    <>
      <NavBar />
      <section id="Galeria" className="order-section">
        <h2>Galería de Diseños Creados</h2>
        <div className="store-description">
          <span className="desc-badge">Galería Premium</span>
          <p style={{ fontWeight: 'bold', fontSize: '1.15em', color: '#FFD700' }}>
            ¡Descubre la inspiración y creatividad de nuestra comunidad!
          </p>
          <p>
            Sumérgete en una galería vibrante donde cada diseño cuenta una historia única.
            Aquí encontrarás camisetas personalizadas, creaciones originales y ediciones limitadas,
            todas hechas con pasión y dedicación por nuestros clientes y artistas.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, idx) => (
            <div
              key={image.id}
              className="gallery-item"
              tabIndex={0}
              aria-label={`Ver detalle de ${image.title}`}
              onClick={() => {
                setSelectedImageIdx(idx);
                addClick(idx);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImageIdx(idx);
                  addClick(idx);
                }
              }}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={image.src}
                  alt={image.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <span>Ver detalle</span>
                </div>
              </div>
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImageIdx !== null && (
          <div className="modal-overlay" onClick={() => setSelectedImageIdx(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button
                className="close-modal"
                aria-label="Cerrar"
                onClick={() => setSelectedImageIdx(null)}
                tabIndex={0}
              >
                &times;
              </button>
              <button
                className="modal-arrow modal-arrow-left"
                aria-label="Anterior"
                onClick={handlePrev}
                tabIndex={0}
              >
                &#8592;
              </button>
              <img
                src={images[selectedImageIdx].src}
                alt={images[selectedImageIdx].title}
                className="modal-image"
              />
              <button
                className="modal-arrow modal-arrow-right"
                aria-label="Siguiente"
                onClick={handleNext}
                tabIndex={0}
              >
                &#8594;
              </button>
              <div className="modal-info">
                <h3>{images[selectedImageIdx].title}</h3>
                <p>{images[selectedImageIdx].description}</p>
                <div className="modal-indicator">
                  {selectedImageIdx + 1} / {images.length}
                </div>
                <button
                  className="btn-next"
                  onClick={() => {
                    window.location.href = '#servicios';
                    setSelectedImageIdx(null);
                  }}
                >
                  ¡Quiero este diseño!
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}