import { useState } from 'react';

const useSignUpFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const signUp = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('El email ya ha sido');
      }

      setIsSignedUp(true);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setIsSignedUp(false);
      setLoading(false);
    }
  };

  return { signUp, loading, error, isSignedUp };
};

export default useSignUpFetch;
