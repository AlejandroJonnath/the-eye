import { useState } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi'; // Iconos de react-icons
import Lottie from 'lottie-react'; // Animaciones Lottie
import shopCarAnimation from '../assets/shopCar.json'; // Animación del carrito de compras
import BankInfo from './BankInfo'; // Componente de información bancaria
import ConfModal from './modal/ConfModal'; // Componente de modal de confirmación/login
import { Link } from 'react-router-dom'; // Link de React Router para navegación SPA
import '../styles/NavBar.css'; // Estilos CSS de la barra de navegación
import { useNavBarClickContext } from "../context/NavBarClickContext"; // Contexto para manejar clics en la barra de navegación

export default function NavBar() {
  // Estado para abrir/cerrar el menú en móvil/tablet
  const [open, setOpen] = useState(false);
  // Estado para mostrar el modal de información bancaria
  const [showBank, setShowBank] = useState(false);
  // Estado para mostrar el modal de confirmación/login
  const [showConfModal, setShowConfModal] = useState(false); 
  // Contexto para manejar clics en la barra de navegación
  const { addNavClick } = useNavBarClickContext();

  return (
    <>
      {/* Barra de navegación principal */}
      <header className="navbar">
        {/* Logo y marca */}
        <div className="brand">
          <img src="/logo.jpg" alt="THE EYE" className="logo" />
        </div>

        {/* Botón para abrir/cerrar el menú en dispositivos móviles */}
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menú de navegación */}
        <nav className={open ? 'nav open' : 'nav'}>
          <ul>
            <li>
              <Link to="/" onClick={() => addNavClick("Inicio")}>Inicio</Link>
            </li>
            <li>
              <Link to="/productos" onClick={() => addNavClick("Productos")}>Productos</Link>
            </li>
            <li>
              <Link to="/OrderForm" onClick={() => addNavClick("Servicios")}>Servicios</Link>
            </li>
            <li>
              <Link to="/Galeria" onClick={() => addNavClick("Galería")}>Galería</Link>
            </li>
            <li>
              <Link to="/Contacto" onClick={() => addNavClick("Contacto")}>Contacto</Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => addNavClick("Blog")}>Blog</Link>
            </li>
          </ul>
        </nav>
        {/* Acciones de la barra de navegación: solo login */}
        <div className="navbar-actions">
          {/* Botón para mostrar el modal de inicio de sesión */}
          <button
            className="login-button"
            aria-label="Iniciar sesión"
            onClick={() => setShowConfModal(true)} 
          >
            <FiUser size={22} />
            <span className="login-text">Iniciar sesión</span>
          </button>
        </div>
      </header>

      {/* Modal de información bancaria */}
      {showBank && <BankInfo onClose={() => setShowBank(false)} />}
      {/* Modal de confirmación/login */}
      {showConfModal && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setShowConfModal(false)}
        >
          <div onClick={e => e.stopPropagation()}>
            <ConfModal />
          </div>
        </div>
      )}
    </>
  );
}