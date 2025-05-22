import React, { createContext, useContext, useState } from "react";

const ClickContext = createContext();

export const useClickContext = () => useContext(ClickContext);

export const ClickProvider = ({ children }) => {
  // 6 camisetas, puedes ajustar el número si agregas más
  const [clicks, setClicks] = useState([0, 0, 0, 0, 0, 0]);

  const addClick = (index) => {
    setClicks(prev => {
      const updated = [...prev];
      updated[index]++;
      return updated;
    });
  };

  return (
    <ClickContext.Provider value={{ clicks, addClick }}>
      {children}
    </ClickContext.Provider>
  );
};