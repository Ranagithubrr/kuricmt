import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <DarkThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};
