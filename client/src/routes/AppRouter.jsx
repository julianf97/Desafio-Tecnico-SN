import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import AdminHome from '../pages/AdminHome/AdminHome';
import { arrayRoutes } from './arrayRoutes';
import ProtectedRoute from './ProtectedRoute';
import { UserContext } from '../context/userContext';
import Home from '../pages/Home/Home';

const AppRouter = () => {
  const { isAdmin, userLogged, setIsAdmin, setUserLogged } = React.useContext(UserContext);
  
  useEffect(() => {
    const userLoggedData = localStorage.getItem('userLogged');
    const isAdminData = localStorage.getItem('isAdmin');
  
    const isAdminValue = JSON.parse(isAdminData);
    const userLoggedValue = JSON.parse(userLoggedData);
  
    setIsAdmin(isAdminValue);
    setUserLogged(userLoggedValue);
  }, [setIsAdmin, setUserLogged]);
  
  const appRoutes = arrayRoutes.map((route, index) => {
    if (route.path === '/admin' && userLogged && !isAdmin) {
      return (
        <Route
          key={index}
          path="/home"
          element={<ProtectedRoute><Navigate to="/home" /></ProtectedRoute>}
        />
      );
    }

    if (route.path === '/home' && userLogged && isAdmin) {
      return (
        <Route
          key={index}
          path="/home"
          element={<ProtectedRoute><Navigate to="/home" /></ProtectedRoute>}
        />
      );
    }

    if ((route.path === '/' || route.path === '/signup' )  && ( userLogged && isAdmin )) {
      return (
        <Route
          key={index}
          path="/admin"
          element={<ProtectedRoute><Navigate to="/admin" /></ProtectedRoute>}
        />
      );
    }
    

    if ((route.path === '/' || route.path === '/signup' )  && ( userLogged && !isAdmin )) {
      return (
        <Route
          key={index}
          path="/home"
          element={<ProtectedRoute><Navigate to="/home" /></ProtectedRoute>}
        />
      );
    }
    return <Route key={index} path={route.path} element={route.element} />;
  });

  return (    
    <Routes>
      {appRoutes}
      {userLogged ? (
        isAdmin ? (
          <>
            <Route path="/" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
          </>
        ) : (
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        )
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Routes>
  );
};

export default AppRouter;
