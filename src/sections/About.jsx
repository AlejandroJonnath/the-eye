import React from 'react';
import ScrollReveal from './ScrollReveal';
import pd1 from '../../public/logo.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <ScrollReveal className="about-wrapper">
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>¿Quiénes somos?</h2>
          <p>THE EYE más que una tienda somos una familia de creadores apasionados por el arte textil.</p>
          <p>Cada prenda se elabora 100% de manera artesanal y se personaliza según tus ideas y estilo único.</p>
        </div>
        <div className="about-image">
          <img src= "/logo.jpg" alt="Equipo de THE EYE" />
        </div>
      </section>
    </ScrollReveal>
  );
}