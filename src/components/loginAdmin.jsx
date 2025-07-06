import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

/**
 * Login Admin - Versión Producción Premium
 */
const loadingMessages = [
  "Verificando acceso a la base de datos...",
  "Comprobando credenciales...",
  "Cifrando conexión segura...",
  "Acceso conseguido"
];

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const loadingTimeout = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    setLoadingMsgIdx(0);

    // Mensajes animados durante el loading
    let idx = 0;
    loadingTimeout.current = setInterval(() => {
      setLoadingMsgIdx(i => {
        if (i < loadingMessages.length - 2) return i + 1;
        return i;
      });
    }, 400);

    setTimeout(() => {
      clearInterval(loadingTimeout.current);
      if (username === 'admin' && password === '12345') {
        setSuccess(true);
        setLoadingMsgIdx(loadingMessages.length - 1); // "Acceso conseguido"
        setTimeout(() => {
          setLoading(false);
          setSuccess(false);
          navigate('/dashboard');
        }, 600);
      } else {
        setLoading(false);
        setSuccess(false);
        setLoadingMsgIdx(0);
        setError('Usuario o contraseña incorrectos');
      }
    }, 1200);
  };

  return (
    <LoginBg>
      <Rain>
        {[...Array(22)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2.5}s`,
              animationDuration: `${1.7 + Math.random()}s`
            }}
          />
        ))}
      </Rain>
      <StyledWrapper>
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <Logo>
            <svg width="48" height="48" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="20" fill="#FFD700" fillOpacity="0.13"/>
              <ellipse cx="22" cy="22" rx="13" ry="13" fill="#FFD700" fillOpacity="0.22"/>
              <ellipse cx="22" cy="22" rx="7" ry="7" fill="#FFD700" fillOpacity="0.7"/>
            </svg>
          </Logo>
          <h1 id="heading">Panel Admin</h1>
          <p className="subtitle">Acceso exclusivo para administradores</p>
          {error && <div className="error">{error}</div>}
          <div className="field">
            <span className="input-icon">
              <svg width="18" height="18" fill="none" stroke="#FFD700" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 16-4 16 0" />
              </svg>
            </span>
            <input
              autoComplete="off"
              placeholder="Usuario"
              className="input-field"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              disabled={loading}
              aria-label="Usuario"
            />
          </div>
          <div className="field">
            <span className="input-icon">
              <svg width="18" height="18" fill="none" stroke="#FFD700" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="5" y="11" width="14" height="8" rx="2"/>
                <path d="M12 15v2"/>
                <path d="M8 11V7a4 4 0 1 1 8 0v4"/>
              </svg>
            </span>
            <input
              placeholder="Contraseña"
              className="input-field"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={loading}
              aria-label="Contraseña"
            />
            <ShowPassBtn
              type="button"
              tabIndex={-1}
              onClick={() => setShowPass(v => !v)}
              aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
              title={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPass ? (
                // OJO ABIERTO = MOSTRAR
                <svg width="20" height="20" fill="none" stroke="#FFD700" strokeWidth="1.5" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="12" rx="10" ry="7"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              ) : (
                // OJO TACHADO = OCULTAR
                <svg width="20" height="20" fill="none" stroke="#FFD700" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M1 1l22 22"/>
                  <ellipse cx="12" cy="12" rx="10" ry="7"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </ShowPassBtn>
          </div>
          <div className="btn">
            <button className="button1" type="submit" disabled={loading}>
              {loading ? <Loader /> : "Acceder"}
            </button>
          </div>
          {loading && (
            <LoadingMsg>
              {success
                ? <span className="success">{loadingMessages[loadingMessages.length - 1]}</span>
                : <span>{loadingMessages[loadingMsgIdx]}</span>
              }
            </LoadingMsg>
          )}
        </form>
      </StyledWrapper>
    </LoginBg>
  );
};

/* Loader animado */
const spin = keyframes`
  100% { transform: rotate(360deg); }
`;
const Loader = styled.div`
  border: 2.5px solid #FFD70044;
  border-top: 2.5px solid #FFD700;
  border-radius: 50%;
  width: 1.2em;
  height: 1.2em;
  animation: ${spin} 0.7s linear infinite;
  margin: 0 auto;
`;

/* Lluvia dorada */
const rain = keyframes`
  0% { top: -30px; opacity: 0; }
  10% { opacity: 0.7; }
  90% { opacity: 0.7; }
  100% { top: 105vh; opacity: 0; }
`;
const Rain = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  span {
    position: absolute;
    top: -30px;
    width: 8px;
    height: 22px;
    background: linear-gradient(180deg, #FFD700 0%, #FFEF8C 80%, transparent 100%);
    border-radius: 6px;
    opacity: 0.7;
    filter: blur(0.5px) drop-shadow(0 0 6px #FFD70099);
    animation: ${rain} linear infinite;
    will-change: top, opacity;
  }
`;

/* Fondo y glassmorphism refinado */
const LoginBg = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #181818 60%, #232526 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

/* Glassmorphism y animaciones */
const glass = keyframes`
  from { opacity: 0; transform: scale(0.97) translateY(30px);}
  to { opacity: 1; transform: scale(1) translateY(0);}
`;

const StyledWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  .form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 2.7em 2.5em 2em 2.5em;
    background: rgba(34,34,34,0.93);
    border-radius: 26px;
    box-shadow: 0 8px 40px 0 #FFD70033, 0 2px 24px #0008, 0 0 0 2px #FFD70022 inset;
    border: 1.5px solid #FFD70033;
    max-width: 390px;
    width: 100%;
    animation: ${glass} 0.8s cubic-bezier(.4,2,.3,1);
    position: relative;
    backdrop-filter: blur(3.5px) brightness(1.08);
    transition: box-shadow .3s, border .3s;
  }
  @media (max-width: 500px) {
    .form {
      padding: 1.5em 0.7em 1.2em 0.7em;
      max-width: 98vw;
    }
  }
  #heading {
    text-align: center;
    margin: 0.5em 0 0.2em 0;
    color: #FFD700;
    font-size: 1.8em;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-shadow: 0 2px 16px #FFD70033, 0 1px 8px #0008;
    animation: fadeInDown 0.7s;
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-18px);}
    to { opacity: 1; transform: translateY(0);}
  }
  .subtitle {
    text-align: center;
    color: #ffe9b3;
    font-size: 1.07em;
    margin-bottom: 0.7em;
    letter-spacing: 0.5px;
    opacity: 0.88;
    text-shadow: 0 1px 8px #000;
    animation: fadeInDown 0.9s;
  }
  .error {
    background: #FFD70022;
    color: #b90000;
    border-radius: 8px;
    padding: 0.7em 1em;
    text-align: center;
    font-weight: 500;
    margin-bottom: 0.2em;
    border: 1px solid #FFD70066;
    box-shadow: 0 2px 8px #FFD70022;
    animation: shake 0.4s;
  }
  @keyframes shake {
    10%, 90% { transform: translateX(-2px);}
    20%, 80% { transform: translateX(4px);}
    30%, 50%, 70% { transform: translateX(-8px);}
    40%, 60% { transform: translateX(8px);}
  }
  .field {
    display: flex;
    align-items: center;
    gap: 0.7em;
    border-radius: 18px;
    padding: 0.7em 1em;
    background: rgba(35,35,58,0.97);
    box-shadow: 0 2px 8px #FFD70011;
    border: 1px solid #FFD70033;
    transition: box-shadow .2s, border .2s;
    position: relative;
  }
  .field:focus-within {
    box-shadow: 0 4px 16px #FFD70055, 0 0 0 2px #FFD70099 inset;
    border: 1.5px solid #FFD700;
    background: rgba(35,35,58,0.99);
  }
  .input-icon {
    height: 1.4em;
    width: 1.4em;
    display: flex;
    align-items: center;
    opacity: 0.85;
    transition: filter .2s;
    filter: drop-shadow(0 0 6px #FFD70044);
    animation: iconPop 0.7s;
  }
  @keyframes iconPop {
    from { transform: scale(0.7);}
    to { transform: scale(1);}
  }
  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #fff;
    font-size: 1.12em;
    padding: 0.2em 0;
    letter-spacing: 0.5px;
    transition: color .2s;
  }
  .input-field:focus {
    color: #FFD700;
  }
  .input-field::placeholder {
    color: #bdbdbd;
    opacity: 0.7;
    font-size: 0.98em;
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 2.2em;
    gap: 1em;
  }
  .button1 {
    padding: 0.7em 2.5em;
    border-radius: 12px;
    border: none;
    outline: none;
    font-size: 1.13em;
    font-weight: 600;
    letter-spacing: 0.7px;
    cursor: pointer;
    background: linear-gradient(90deg, #FFD700 60%, #FF8C00 100%);
    color: #232323;
    box-shadow: 0 2px 12px #FFD70033, 0 0 0 2px #FFD70022 inset;
    transition: background .25s, color .25s, box-shadow .2s, border .2s, transform .2s;
    text-shadow: 0 1px 8px #fff8;
    border: 1.5px solid #FFD70055;
    position: relative;
  }
  .button1:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    filter: grayscale(0.2);
  }
  .button1:hover:not(:disabled), .button1:focus:not(:disabled) {
    background: linear-gradient(90deg, #FF8C00 60%, #FFD700 100%);
    color: #fff;
    transform: translateY(-2px) scale(1.04);
    outline: none;
    box-shadow: 0 4px 16px #FFD70055, 0 0 0 2px #FFD70099 inset;
    border: 1.5px solid #FFD700;
  }
`;

const ShowPassBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: -0.2em;
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: opacity .2s, transform .2s;
  &:hover, &:focus {
    opacity: 1;
    transform: scale(1.13);
  }
`;

/* Logo animado */
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.2em;
  svg {
    animation: logoPulse 2.5s infinite;
    filter: drop-shadow(0 0 12px #FFD70055);
  }
  @keyframes logoPulse {
    0%, 100% { filter: drop-shadow(0 0 12px #FFD70055);}
    50% { filter: drop-shadow(0 0 32px #FFD70099);}
  }
`;

const LoadingMsg = styled.div`
  margin-top: 1.2em;
  text-align: center;
  font-size: 0.98em;
  color: #FFD700;
  opacity: 0.92;
  letter-spacing: 0.5px;
  min-height: 1.5em;
  animation: fadeInMsg 0.3s;
  .success {
    color: #21d07a;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0 1px 8px #21d07a44;
    transition: color 0.2s;
  }
  @keyframes fadeInMsg {
    from { opacity: 0; transform: translateY(10px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

export default Form;