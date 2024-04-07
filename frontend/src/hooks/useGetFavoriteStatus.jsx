import { useEffect, useState } from 'react';
import { getUserById } from '../services/UserServices';

const useGetFavoriteStatus = (userId, productId) => {
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId && userId !== null) {
          const result = await getUserById(userId);
          result.user.favorites &&
            result.user.favorites.forEach((f) => {
              if (f === productId) {
                setStatus(true);
              }
            });
        }
      } catch (error) {
        setError(`Error fetching user or favorites: ${error.message}`);
      }
    };

    fetchData();
  }, [userId, productId]);
  return [status, error];
};

export default useGetFavoriteStatus;
