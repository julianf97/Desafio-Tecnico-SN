import { useState, useEffect } from 'react';

const useAllTramites = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tramites, setTramites] = useState([]);

  useEffect(() => {
    const fetchTramites = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tramites');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los trámites.');
        }
        const data = await response.json();
        setTramites(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTramites();
  }, []);

  return { loading, error, tramites };
};

export default useAllTramites;
