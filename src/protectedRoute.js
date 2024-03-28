import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const {userData} = useAuth()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(userData)
  useEffect(() => {
    if ( !userData || userData === undefined) {
      navigate('/login');
    } else {
      setIsAuthenticated(true)
    }
  }, [userData, navigate,]);
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
