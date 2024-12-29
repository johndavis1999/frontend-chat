import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const GlobalContext = createContext();

// Componente proveedor para envolver la aplicación
export const GlobalProvider = ({ children }) => {
  const [apiUrl] = useState(process.env.REACT_APP_API_URL); // Leer desde .env
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || null);

  // Función para guardar el token y el username
  const saveAuthData = (token, username) => {
    setAuthToken(token);
    setUsername(username);
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
  };

  // Función para cerrar sesión
  const clearAuthData = () => {
    setAuthToken(null);
    setUsername(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  };

  return (
    <GlobalContext.Provider value={{ apiUrl, authToken, username, saveAuthData, clearAuthData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para acceder al contexto en otros componentes
export const useGlobalContext = () => useContext(GlobalContext);