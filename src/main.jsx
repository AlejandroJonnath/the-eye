// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css'; // Asegúrate de que este archivo exista y contenga estilos globales

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
