// Requiere instalar:
// npm install react-intersection-observer

// src/components/ScrollReveal.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/ScrollReveal.css';

export default function ScrollReveal({ children, className = '', threshold = 0.2, ...props }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'reveal' : 'not-reveal'}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
