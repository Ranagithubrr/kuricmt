import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!userState.user || userState.user.type !== "admin") {
      navigate('/dashboard');
    } else {
      setIsAuthenticated(true)
    }
  }, [userState.user, navigate]);
  return isAuthenticated ? <>{children}</> : null;
};

export default AdminProtected;