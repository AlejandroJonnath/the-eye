import '../styles/Footer.css';

/**
 * Componente Footer
 * Renderiza el pie de página del sitio web con información de marca, enlaces rápidos, contacto y redes sociales.
 */
export default function Footer() {
  return (
    <footer className="footer" aria-label="Pie de página de THE EYE">
      {/* Contenedor principal del contenido del footer */}
      <div className="footer-content">
        {/* Sección de marca: logo y nombre de la tienda */}
        <div className="footer-brand">
          {/* Enlace al inicio con el logo de la tienda */}
          <a href="#inicio" aria-label="Ir al inicio">
            <img src="/logo.jpg" alt="Logo de THE EYE" className="footer-logo" />
          </a>
          {/* Nombre de la tienda */}
          <span className="footer-title">THE EYE</span>
          {/* Eslogan de la tienda */}
          <span className="footer-slogan">Expresa tu estilo, viste diferente.</span>
        </div>
        {/* Navegación de enlaces rápidos dentro del footer */}
        <nav className="footer-links" aria-label="Enlaces rápidos">
          {/* Enlace rápido a la sección de productos */}
          <a href="#productos">Productos</a>
          {/* Enlace rápido a la sección de servicios */}
          <a href="#servicios">Servicios</a>
          {/* Enlace rápido a la sección de preguntas frecuentes */}
          <a href="#faq">FAQ</a>
        </nav>
        {/* Información de contacto del propietario o responsable */}
        <address className="footer-contact">
          {/* Nombre del responsable */}
          <div>
            <strong>Nombre:</strong> Edison Proaño
          </div>
          {/* Correo electrónico de contacto con enlace mailto */}
          <div>
            <strong>Correo:</strong>{" "}
            <a href="mailto:edison.proaño@itq.edu.ec" aria-label="Enviar correo a Edison Proaño">
              edison.proaño@itq.edu.ec
            </a>
          </div>
          {/* Teléfono de contacto con enlace a WhatsApp */}
          <div>
            <strong>Teléfono:</strong>{" "}
            <a href="https://wa.me/593961620349" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
              +593 96 162 0349
            </a>
          </div>
        </address>
        {/* Enlaces a redes sociales con íconos SVG personalizados */}
        <div className="footer-social" aria-label="Redes sociales">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-social-link"
          >
            {/* Ícono Instagram oficial */}
            <svg width="32" height="32" viewBox="0 0 512 512" aria-hidden="true">
              <defs>
                <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                  <stop offset="0%" stop-color="#fdf497"/>
                  <stop offset="5%" stop-color="#fdf497"/>
                  <stop offset="45%" stop-color="#fd5949"/>
                  <stop offset="60%" stop-color="#d6249f"/>
                  <stop offset="90%" stop-color="#285AEB"/>
                </radialGradient>
              </defs>
              <circle cx="256" cy="256" r="256" fill="url(#ig-gradient)" />
              <rect x="96" y="96" width="320" height="320" rx="90" fill="none" stroke="#fff" strokeWidth="32"/>
              <circle cx="256" cy="256" r="80" fill="none" stroke="#fff" strokeWidth="32"/>
              <circle cx="352" cy="160" r="24" fill="#fff"/>
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer-social-link"
          >
            {/* Ícono Facebook oficial */}
            <svg width="32" height="32" viewBox="0 0 512 512" aria-hidden="true">
              <circle cx="256" cy="256" r="256" fill="#1877F3"/>
              <path d="M355.7 330l11.6-75.6h-72.1v-49.1c0-20.7 10.1-40.8 42.5-40.8h32.9V99.1s-29.9-5.1-58.5-5.1c-59.7 0-98.7 36.2-98.7 101.9v56.5h-66.4V330h66.4v182c13.3 2.1 27 3.2 41 3.2s27.7-1.1 41-3.2V330h59.3z" fill="#fff"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/593961620349"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="footer-social-link"
          >
            {/* Ícono WhatsApp oficial */}
            <svg width="32" height="32" viewBox="0 0 512 512" aria-hidden="true">
              <circle cx="256" cy="256" r="256" fill="#25D366"/>
              <path d="M380.9 131.1c-35.6-35.6-83-55.2-133.6-55.2-104.3 0-189.1 84.8-189.1 189.1 0 33.4 8.7 66.1 25.2 94.7L64 448l89.3-23.5c27.7 15.1 59.1 23.1 91.1 23.1 104.3 0 189.1-84.8 189.1-189.1 0-50.6-19.6-98-55.2-133.6z" fill="#fff" opacity="0.2"/>
              <path d="M256 128c-70.7 0-128 57.3-128 128 0 22.6 6.1 44.7 17.6 64l-11.7 43.2 44.2-11.6c18.7 10.2 39.8 15.6 61.9 15.6 70.7 0 128-57.3 128-128s-57.3-128-128-128zm70.6 170.7c-3 8.4-15.2 15.9-20.8 16.9-5.3 1-12.1 1.5-19.5-1.2-4.5-1.7-10.3-3.4-17.8-6.7-31.3-13.5-51.7-44.5-53.3-46.6-1.5-2-12.7-16.9-12.7-32.3 0-15.4 8.1-22.9 11-25.9 2.9-3 6.3-3.7 8.4-3.7 2.1 0 4.2 0 6 0.1 1.9 0.1 4.5-0.7 7.1 5.4 2.6 6.1 8.7 21.1 9.5 22.6 0.8 1.5 1.3 3.3 0.3 5.3-1 2-1.5 3.3-3 5.1-1.5 1.8-3.1 4-4.4 5.4-1.5 1.5-3 3.1-1.3 6.1 1.7 3 7.6 12.6 16.3 20.5 8.7 7.9 16.1 10.4 19.1 11.6 3 1.2 4.7 1 6.4-0.6 1.7-1.6 7.3-8.5 9.3-11.4 2-2.9 3.9-2.4 6.5-1.5 2.6 0.9 16.5 7.8 19.3 9.2 2.8 1.4 4.7 2.1 5.4 3.3 0.7 1.2 0.7 6.9-2.3 15.3z" fill="#fff"/>
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