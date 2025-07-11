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

export const productos = [
  { 
    nombre: 'Edix Music', 
    imagen: pd1, 
    descripcion: '¡Lleva el ritmo contigo! Camiseta exclusiva Edix Music, perfecta para amantes de la música y el streetwear.',
    talla: 'S, M, L, XL',
    color: 'Negro',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$20'
  },
  { 
    nombre: 'Canserbero', 
    imagen: pd2, 
    descripcion: 'Tributo al legendario rapero venezolano. Diseño único para fans auténticos.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$20'
  },
  { 
    nombre: 'Canserbero Edición Especial', 
    imagen: pd3, 
    descripcion: 'Edición especial Canserbero. Estilo y homenaje en una sola prenda.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$22'
  },
  { 
    nombre: 'Jujutsu Kaisen', 
    imagen: pd4, 
    descripcion: '¡Para verdaderos fans del anime! Diseño inspirado en Jujutsu Kaisen, cómodo y moderno.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$21'
  },
  { 
    nombre: 'Jujutsu Kaisen Edición Limitada', 
    imagen: pd5, 
    descripcion: 'Colección limitada Jujutsu Kaisen. Lleva a tus personajes favoritos contigo.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$23'
  },
  { 
    nombre: 'Always The Eye', 
    imagen: pd6, 
    descripcion: 'Minimalismo y misterio. El icónico ojo en un diseño elegante y versátil.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$20'
  },
  { 
    nombre: 'The Eye Savage Red', 
    imagen: pd7, 
    descripcion: 'Edición especial en rojo intenso. Destaca tu estilo con actitud y personalidad.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$21'
  },
  { 
    nombre: 'Urban The Eye', 
    imagen: pd8, 
    descripcion: 'Streetwear y simbolismo en una sola prenda. Ideal para tu look urbano.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$20'
  },
  { 
    nombre: 'B/W The Eye', 
    imagen: pd9, 
    descripcion: 'Clásico blanco y negro. Elegancia y misterio para cualquier ocasión.',
    talla: 'S, M, L, XL',
    color: 'Blanco y negro',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$20'
  },
  { 
    nombre: 'The Eye Great Apparel', 
    imagen: pd10, 
    descripcion: 'Diseño premium con acabados especiales. Calidad y estilo en cada detalle.',
    talla: 'S, M, L, XL',
    color: 'Blanco',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$24'
  },
  { 
    nombre: 'The Eye Savage Green', 
    imagen: pd11, 
    descripcion: 'Variante verde esmeralda. Frescura y actitud para destacar donde vayas.',
    talla: 'S, M, L, XL',
    color: 'Verde esmeralda',
    material: 'Algodón premium',
    tiempo: 'Envío rápido: 2 días hábiles',
    precio : '$21'
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
                  <p><strong>Tallas:</strong> {p.talla}</p>
                  <p><strong>Color:</strong> {p.color}</p>
                  <p><strong>Material:</strong> {p.material}</p>
                  <p><strong>Envío:</strong> {p.tiempo}</p>
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