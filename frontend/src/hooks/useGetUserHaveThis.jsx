import { useEffect, useState } from 'react';

import { getOrdersByUserId } from '../services/OrderServices';

const useGetUserHaveThis = (userId, productId) => {
  const [have, setHave] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId && productId) {
          const result = await getOrdersByUserId(userId);
          result.orders.forEach((order) => {
            const foundProduct = order.products.find((p) => p.id === productId);
            if (foundProduct) {
              setHave(true);
            }
          });
        }
      } catch (error) {
        setError(`Error fetching orders: ${error.message}`);
      }
    };

    fetchData();
  }, [userId, productId]);

  return [have, error];
};

export default useGetUserHaveThis;
