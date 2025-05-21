import '../styles/Footer.css';

/**
 * Componente Footer
 * Renderiza el pie de página del sitio web con información de marca, enlaces rápidos, contacto y redes sociales.
 */
export default function Footer() {
  return (
    <footer className="footer">
      {/* Contenedor principal del contenido del footer */}
      <div className="footer-content">
        {/* Sección de marca: logo y nombre de la tienda */}
        <div className="footer-brand">
          {/* Logo de la tienda */}
          <img src="/logo.jpg" alt="THE EYE Logo" className="footer-logo" />
          {/* Nombre de la tienda */}
          <span className="footer-title">THE EYE</span>
        </div>
        {/* Navegación de enlaces rápidos dentro del footer */}
        <nav className="footer-links">
          {/* Enlace rápido a la sección de productos */}
          <a href="#productos">Productos</a>
          {/* Enlace rápido a la sección de servicios */}
          <a href="#servicios">Servicios</a>
          {/* Enlace rápido a la sección de preguntas frecuentes */}
          <a href="#faq">FAQ</a>
        </nav>
        {/* Información de contacto del propietario o responsable */}
        <div className="footer-contact">
          {/* Nombre del responsable */}
          <div>
            <strong>Nombre:</strong> Edison Proaño
          </div>
          {/* Correo electrónico de contacto */}
          <div>
            <strong>Correo:</strong> edison.proaño@itq.edu.ec
          </div>
          {/* Teléfono de contacto */}
          <div>
            <strong>Teléfono:</strong> +593 96 162 0349
          </div>
        </div>
        {/* Enlaces a redes sociales con íconos SVG personalizados */}
        <div className="footer-social">
          {/* Enlace a Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            {/* Ícono de Instagram en SVG con detalles de color dorado */}
            <svg width="22" height="22" fill="currentColor">
              <circle cx="11" cy="11" r="10" stroke="#ffd700" strokeWidth="2" fill="none"/>
              <rect x="6" y="6" width="10" height="10" rx="3" fill="#ffd700" opacity="0.2"/>
              <circle cx="11" cy="11" r="3" fill="#ffd700" />
            </svg>
          </a>
          {/* Enlace a Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            {/* Ícono de Facebook en SVG con detalles de color dorado */}
            <svg width="22" height="22" fill="currentColor">
              <circle cx="11" cy="11" r="10" stroke="#ffd700" strokeWidth="2" fill="none"/>
              <path d="M13 8h2V6h-2a3 3 0 0 0-3 3v2H8v2h2v6h2v-6h2l1-2h-3V9a1 1 0 0 1 1-1z" fill="#ffd700" opacity="0.2"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Línea inferior del footer con derechos reservados y año dinámico */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} THE EYE. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}