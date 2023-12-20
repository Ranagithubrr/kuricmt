import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if ( !userState || userState === null || userState === undefined || !userState.user) {
      navigate('/login');
    } else {
      setIsAuthenticated(true)
    }
  }, [userState.user, navigate, userState]);
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
