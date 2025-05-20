import '../styles/Products.css';
import pd1 from '../assets/pd1.jpg';
import pd2 from '../assets/pd2.jpg';
import pd3 from '../assets/pd3.jpg';
import pd4 from '../assets/pd4.jpg';
import pd5 from '../assets/pd5.jpg';
import pd6 from '../assets/pd6.jpg';
import pd7 from '../assets/pd7.jpg';
import pd8 from '../assets/pd8.jpg';
import pd9 from '../assets/pd9.jpg';
import pd10 from '../assets/pd10.jpg';
import pd11 from '../assets/pd11.jpg';
import React from 'react';

const productos = [
  { 
    nombre: 'Edix Music', 
    imagen: pd1, 
    descripcion: 'Camiseta con diseño exclusivo de Edix Music',
    talla: 'S, M, L, XL',
    color: 'Negro',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'Canserbero', 
    imagen: pd2, 
    descripcion: 'Homenaje al legendario rapero venezolano',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'Canserbero1', 
    imagen: pd3, 
    descripcion: 'Homenaje al legendario rapero venezolano',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'Jujutsu Kaisen', 
    imagen: pd4, 
    descripcion: 'Captura la esencia del anime con nuestro diseño exclusivo de Jujutsu Kaisen. Perfecta para los verdaderos fans del mundo de los hechiceros.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'Jujutsu Kaisen1', 
    imagen: pd5, 
    descripcion: 'Segunda edición limitada de nuestra colección Jujutsu Kaisen. Un tributo vibrante a tus personajes favoritos.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'Always The Eye', 
    imagen: pd6, 
    descripcion: 'El icónico ojo que todo lo ve, en un diseño minimalista pero impactante. Para quienes buscan estilo con significado.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'The Eye Savage red', 
    imagen: pd7, 
    descripcion: 'Edición especial en rojo intenso. El diseño del ojo nunca fue tan salvaje. Ideal para destacar entre la multitud.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'Urban The Eye', 
    imagen: pd8, 
    descripcion: 'Fusión perfecta entre streetwear y simbolismo. Un must-have para tu guardarropa urbano.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'B/W The Eye', 
    imagen: pd9, 
    descripcion: 'Clásico atemporal en blanco y negro. Elegancia y misterio en cada hilo.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'The Eye Great Apparel', 
    imagen: pd10, 
    descripcion: 'Nuestro diseño premium con acabados especiales. Calidad que se ve y se siente.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  },
  { 
    nombre: 'The Eye Savage green', 
    imagen: pd11, 
    descripcion: 'Variante en verde esmeral que hipnotiza. Frescura y actitud en un solo diseño.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón 100%',
    tiempo: '2 días hábiles',
    precio : '20$'
  }
];

export default function Products() {
  return (
    <section id="productos" className="products">
      <h2>Productos en stock</h2>
      <div className="product-grid">
        {productos.map((p, i) => (
          <div key={i} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="image-container">
                  <img src={p.imagen} alt={p.nombre} />
                </div>
                <h3>{p.nombre}</h3>
              </div>
              <div className="flip-card-back">
                <h3>{p.nombre}</h3>
                <p className="description">{p.descripcion}</p>
                <div className="product-details">
                  <p><strong>Talla:</strong> {p.talla}</p>
                  <p><strong>Color:</strong> {p.color}</p>
                  <p><strong>Material:</strong> {p.material}</p>
                  <p><strong>Tiempo:</strong> {p.tiempo}</p>
                  <p><strong>Precio:</strong> {p.precio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}