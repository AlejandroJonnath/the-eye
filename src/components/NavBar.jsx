import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Lottie from 'lottie-react';
import shopCarAnimation from '../assets/shopCar.json';
import BankInfo from './BankInfo';
import '../styles/NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const links = ['Inicio', 'Productos', 'Servicios', 'Contacto'];

  return (
    <>
      <header className="navbar">
        <div className="brand">
          <img src="/logo.png" alt="THE EYE" className="logo" />
          <span className="slogan">Somos THE EYE, somos Familia</span>
        </div>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          <ul>
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
            <li>
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
            </li>
          </ul>
        </nav>
      </header>

      {showBank && <BankInfo onClose={() => setShowBank(false)} />}
    </>
  );
}