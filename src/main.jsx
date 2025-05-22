// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ClickProvider } from "./context/ClickContext";
import { NavBarClickProvider } from "./context/NavBarClickContext";
import './styles/index.css'; // Asegúrate de que este archivo exista y contenga estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/the-eye">
      <ClickProvider>
        <NavBarClickProvider>
          <AppRouter />
        </NavBarClickProvider>
      </ClickProvider>
    </BrowserRouter>
  </React.StrictMode>
);
