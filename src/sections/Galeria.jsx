import '../styles/Galeria.css';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useClickContext } from "../context/ClickContext";

// Las imágenes deben estar en la carpeta public/ (NO en src/)
const imagesData = [
  {
    id: 1,
    src: 'g1.jpg',
    title: 'Diseño Exclusivo 1',
    description: 'Camiseta con diseño urbano moderno'
  },
  {
    id: 2,
    src: 'g2.jpg',
    title: 'Diseño Exclusivo 2',
    description: 'Estampado artístico limitado'
  },
  {
    id: 3,
    src: 'g3.jpg',
    title: 'Diseño Exclusivo 3',
    description: 'Edición especial aniversario'
  },
  {
    id: 4,
    src: 'g4.jpg',
    title: 'Diseño Exclusivo 4',
    description: 'Colección de verano'
  },
  {
    id: 5,
    src: 'g5.jpg',
    title: 'Diseño Exclusivo 5',
    description: 'Serie inspirada en arte callejero'
  },
  {
    id: 6,
    src: 'g6.jpg',
    title: 'Diseño Exclusivo 6',
    description: 'Edición especial aniversario'
  }
];

export default function Galeria() {
  const [images] = useState(imagesData);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addClick } = useClickContext();

  // Para compatibilidad con build y GitHub Pages
  const getImgSrc = (src) => `${window.location.pathname.startsWith('/the-eye') ? '/the-eye' : ''}/${src}`;

  return (
    <>
      <NavBar />
      <section id="Galeria" className="order-section">
        <h2>Galería de Diseños Creados</h2>
        <div className="store-description">
          <p style={{ fontWeight: 'bold', fontSize: '1.15em', color: '#FFD700' }}>
            ¡Descubre la inspiración y creatividad de nuestra comunidad!
          </p>
          <p>
            Sumérgete en una galería vibrante donde cada diseño cuenta una historia única.
            Aquí encontrarás camisetas personalizadas, creaciones originales y ediciones limitadas,
            todas hechas con pasión y dedicación por nuestros clientes y artistas.
            <br /><br />
            ¿Te imaginas luciendo una de estas piezas exclusivas?
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}> ¡Hazla tuya o crea la tuya propia!</span>
            <br /><br />
            Haz clic en cualquier diseño para verlo en detalle y pedir el tuyo personalizado.
            ¡Exprésate, destaca y lleva tu estilo al siguiente nivel con <span style={{ color: '#FFD700', fontWeight: 'bold' }}>THE EYE</span>!
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, idx) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => {
                setSelectedImage(image);
                addClick(idx);
              }}
            >
              <img
                src={getImgSrc(image.src)}
                alt={image.title}
                className="gallery-image"
                onError={() => console.log('No se encontró:', getImgSrc(image.src))}
              />
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span
                className="close-modal"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </span>
              <img
                src={getImgSrc(selectedImage.src)}
                alt={selectedImage.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <button
                  className="btn-next"
                  onClick={() => {
                    window.location.href = '#order';
                    setSelectedImage(null);
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