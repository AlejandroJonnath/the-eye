import React, { createContext, useContext, useState } from "react";

const NavBarClickContext = createContext();

export const useNavBarClickContext = () => useContext(NavBarClickContext);

export const NavBarClickProvider = ({ children }) => {
  // Ajusta los nombres según los apartados de tu NavBar
  const [navClicks, setNavClicks] = useState({
    Inicio: 0,
    Productos: 0,
    Servicios: 0,
    Galería: 0,
    Contacto: 0,
    Blog: 0,
  });

  const addNavClick = (section) => {
    setNavClicks(prev => ({
      ...prev,
      [section]: prev[section] + 1
    }));
  };

  return (
    <NavBarClickContext.Provider value={{ navClicks, addNavClick }}>
      {children}
    </NavBarClickContext.Provider>
  );
};