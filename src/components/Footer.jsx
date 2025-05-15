import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo.png" alt="THE EYE Logo" className="footer-logo" />
          <span className="footer-title">THE EYE</span>
        </div>
        <nav className="footer-links">
          <a href="#productos">Productos</a>
          <a href="#servicios">Servicios</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="footer-contact">
          <div><strong>Nombre:</strong> Edison Proaño</div>
          <div><strong>Correo:</strong> edison.proaño@itq.edu.ec</div>
          <div><strong>Teléfono:</strong> +593 96 162 0349</div>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="22" height="22" fill="currentColor"><circle cx="11" cy="11" r="10" stroke="#ffd700" strokeWidth="2" fill="none"/><rect x="6" y="6" width="10" height="10" rx="3" fill="#ffd700" opacity="0.2"/><circle cx="11" cy="11" r="3" fill="#ffd700" /></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="22" height="22" fill="currentColor"><circle cx="11" cy="11" r="10" stroke="#ffd700" strokeWidth="2" fill="none"/><path d="M13 8h2V6h-2a3 3 0 0 0-3 3v2H8v2h2v6h2v-6h2l1-2h-3V9a1 1 0 0 1 1-1z" fill="#ffd700" opacity="0.2"/></svg>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} THE EYE. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}