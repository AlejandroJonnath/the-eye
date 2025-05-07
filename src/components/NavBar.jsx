import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = ['Inicio', 'Productos', 'Servicios', 'Contacto'];

  return (
    <header className="navbar">
      <div className="brand">
        <img src="/logo.png" alt="THE EYE" className="logo" />
        <span className="slogan">Somos THE EYE, somos Familia</span>
      </div>
      <button
        className="nav-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Menú"
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        <ul>
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
