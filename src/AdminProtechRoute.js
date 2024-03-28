import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();
  const {userData} = useAuth()
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!userData || userData.type !== "admin") {
      navigate('/dashboard');
    } else {
      setIsAuthenticated(true)
    }
  }, [userData, navigate]);
  return isAuthenticated ? <>{children}</> : null;
};

export default AdminProtected;