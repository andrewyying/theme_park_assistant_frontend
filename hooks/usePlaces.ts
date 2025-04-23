import { useEffect, useState } from 'react';
import { LOCAL_HOST } from '@/constants/connection';

export function usePlaces() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const url = `http://${LOCAL_HOST}:8080/locations`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(data => {
        setPlaces(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { places, loading, error };
}