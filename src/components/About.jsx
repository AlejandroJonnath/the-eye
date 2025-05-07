import React from 'react';
import ScrollReveal from './ScrollReveal';
import pd1 from '../assets/logo.png';
import '../styles/About.css';

export default function About() {
  return (
    <ScrollReveal className="about-wrapper">
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>Sobre Nosotros</h2>
          <p>En THE EYE somos más que una tienda: somos una familia de creadores apasionados por el arte textil.</p>
          <p>Cada prenda se elabora 100% de manera artesanal y se personaliza según tus ideas y estilo único.</p>
        </div>
        <div className="about-image">
          <img src= "/logo.png" alt="Equipo de THE EYE" />
        </div>
      </section>
    </ScrollReveal>
  );
}