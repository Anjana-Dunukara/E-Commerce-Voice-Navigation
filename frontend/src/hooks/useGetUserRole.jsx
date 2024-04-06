import { useState, useEffect } from 'react';

import { getUserById } from '../services/UserServices';

const useGetUserRole = (userId) => {
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserById(userId);
        if (result && result.user) {
          setAdmin(result.user.admin);
        } else {
          setError('Invalid user data');
        }
      } catch (error) {
        setError(`Error fetching user: ${error.message}`);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  return [admin, error];
};

export default useGetUserRole;
