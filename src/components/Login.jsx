// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleUserLogin = () => {
    // Lógica para usuario normal
    navigate('/'); // Redirige a la página principal
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Validación básica (en producción usa autenticación segura)
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      navigate('/'); // Redirige a la página principal
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      {!isAdmin ? (
        <div className="login-options">
          <h2>Bienvenido a THE EYE</h2>
          <button onClick={handleUserLogin} className="login-button user">
            Entrar como Usuario
          </button>
          <button onClick={() => setIsAdmin(true)} className="login-button admin">
            Soy Administrador
          </button>
        </div>
      ) : (
        <form onSubmit={handleAdminLogin} className="admin-login-form">
          <h2>Acceso Administrador</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            required
          />
          <button type="submit" className="login-button submit">
            Ingresar
          </button>
          <button type="button" onClick={() => setIsAdmin(false)} className="back-button">
            Volver
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;