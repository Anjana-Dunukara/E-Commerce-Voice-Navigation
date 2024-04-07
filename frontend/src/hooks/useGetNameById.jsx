import { useEffect, useState } from 'react';

import { getUserById } from '../services/UserServices';

const useGetNameById = (id) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserById(id);
        if (result && result.user) {
          setName(result.user.firstName + ' ' + result.user.lastName);
        } else {
          setError('User not found');
        }
      } catch (error) {
        setError(`Error fetching user: ${error.message}`);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  return [name, error];
};

export default useGetNameById;
