import { useState, useEffect } from 'react';

import { getUserById } from '../services/UserServices';

const useGetUserRole = (userId) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    getUserById(userId)
      .then((result) => {
        if (result && result.user) {
          setAdmin(result.user.admin);
        } else {
          console.error('Invalid user data:', result);
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [userId]);

  return [admin];
};

export default useGetUserRole;
