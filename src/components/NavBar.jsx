import { useState } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import Lottie from 'lottie-react';
import shopCarAnimation from '../assets/shopCar.json';
import BankInfo from './BankInfo';
import '../styles/NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showBank, setShowBank] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="brand">
          <img src="/logo.jpg" alt="THE EYE" className="logo" />
        </div>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/galeria">Galería</a>
            </li>
            <li>
              <a href="/testimonios">Testimonios</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="navbar-actions">
          <button
            className="cart-button"
            onClick={() => setShowBank(true)}
            aria-label="Ver información bancaria"
          >
            <Lottie
              animationData={shopCarAnimation}
              loop={true}
              className="cart-animation"
            />
          </button>
          <button className="login-button" aria-label="Iniciar sesión">
            <FiUser size={22} />
            <span className="login-text">Iniciar sesión</span>
          </button>
        </div>
      </header>

      {showBank && <BankInfo onClose={() => setShowBank(false)} />}
    </>
  );
}