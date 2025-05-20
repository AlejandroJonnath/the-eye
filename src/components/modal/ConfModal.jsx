import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ConfModal = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <div className="brutalist-card">
        <div className="brutalist-card__header">
          <div className="brutalist-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <div className="brutalist-card__alert">Advertencia</div>
        </div>
        <div className="brutalist-card__message">
          Este apartado solo sirve para mostrar si quieres ingresar como administrador, si no lo eres escoge el botón 
          "Usuario" y si eres administrador escoge el botón "Admin"
        </div>
        <div className="brutalist-card__actions">
          <a
            className="brutalist-card__button brutalist-card__button--mark"
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate('/loginAdmin');
            }}
          >
            Administrador
          </a>
          <a
            className="brutalist-card__button brutalist-card__button--read"
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Usuario
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Paleta inspirada en el navbar: fondo oscuro, detalles dorados */
  .brutalist-card {
    width: 320px;
    border: 4px solid #e1bc4b;
    background-color: #171717;
    padding: 1.5rem;
    box-shadow: 10px 10px 0 #e1bc4b;
    font-family: "Arial", sans-serif;
  }

  .brutalist-card__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e1bc4b;
    padding-bottom: 1rem;
  }

  .brutalist-card__icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e1bc4b;
    padding: 0.5rem;
    border-radius: 50%;
  }

  .brutalist-card__icon svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: #171717;
  }

  .brutalist-card__alert {
    font-weight: 900;
    color: #e1bc4b;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .brutalist-card__message {
    margin-top: 1rem;
    color: #fff;
    font-size: 0.98rem;
    line-height: 1.4;
    border-bottom: 2px solid #e1bc4b;
    padding-bottom: 1rem;
    font-weight: 600;
  }

  .brutalist-card__actions {
    margin-top: 1rem;
  }

  /* No tocar los estilos de los botones */
  .brutalist-card__button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 3px solid #000;
    background-color: #fff;
    color: #000;
    position: relative;
    transition: all 0.2s ease;
    box-shadow: 5px 5px 0 #000;
    overflow: hidden;
    text-decoration: none;
    margin-bottom: 1rem;
  }

  .brutalist-card__button--read {
    background-color: #000;
    color: #fff;
  }

  .brutalist-card__button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: all 0.6s;
  }

  .brutalist-card__button:hover::before {
    left: 100%;
  }

  .brutalist-card__button:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0 #000;
  }

  .brutalist-card__button--mark:hover {
    background-color: #296fbb;
    border-color: #296fbb;
    color: #fff;
    box-shadow: 7px 7px 0 #004280;
  }

  .brutalist-card__button--read:hover {
    background-color: #ff0000;
    border-color: #ff0000;
    color: #fff;
    box-shadow: 7px 7px 0 #800000;
  }

  .brutalist-card__button:active {
    transform: translate(5px, 5px);
    box-shadow: none;
  }`;

export default ConfModal;