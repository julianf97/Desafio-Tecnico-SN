import { useState } from 'react';

const useLoginFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRol] = useState(false) 
  const [userId, setUserId] = useState(null)
  
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/iniciarsesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();


      setUserRol(data.user.admin)

      setUserId(data.user.id)

      setIsLoggedIn(true); 
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoggedIn(false); 
      setLoading(false);
    }
  };

  return { login, loading, error, isLoggedIn, userRole, userId };
};

export default useLoginFetch;
