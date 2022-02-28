import { Navigate } from 'react-router-dom'
import React, { useContext } from 'react';
import HomePage from '../Pages/HomePage';
import AuthContext from '../context/AuthContext';

const PrivateRoute = () => {
  let {user} = useContext(AuthContext)
  return !user? <HomePage /> : <Navigate to="/login" />;
}

export default PrivateRoute