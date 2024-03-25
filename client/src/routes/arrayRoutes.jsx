import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import AdminHome from '../pages/AdminHome/AdminHome';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import { Navigate } from 'react-router-dom';

export const arrayRoutes = [
  {
    path: '/home',
    element: <ProtectedRoute><Home/></ProtectedRoute>
  },
  {
    path: '/admin',
    element: <ProtectedRoute><AdminHome/></ProtectedRoute>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '*',
    element: <Navigate to={'/'}/>
  }
]