// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userDataC');
    return savedUserData ? JSON.parse(savedUserData) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  useEffect(() => {
    if (userData && token) {
      localStorage.setItem('userDataC', JSON.stringify(userData));
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('userDataC');
      localStorage.removeItem('token');
    }
  }, [userData, token]);

  const login = (userData, token) => {
    setUserData(userData);
    setToken(token);
  };
  const updateUserData = (userData) => {
    setUserData(userData);
  };

  const logout = () => {
    localStorage.removeItem('userDataC');
    localStorage.removeItem('token');
    setUserData(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ userData, token, login, logout, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
