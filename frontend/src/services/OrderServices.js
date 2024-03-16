import axios from 'axios';

export const getAllOrders = async () => {
  const { data } = await axios.get(`http://localhost:4000/orders`);
  return data;
};

export const getOrderById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/orders/${id}`);
  return data;
};

export const getOrdersByStatus = async (status) => {
  const { data } = await axios.get(
    `http://localhost:4000/orders/status/${status}`
  );
  return data;
};

export const getOrdersByUserId = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/orders/user/${id}`);
  return data;
};

export const addOrder = async (products, buyer, address) => {
  const { data } = await axios.post(`http://localhost:4000/orders`, {
    products,
    buyer,
    address,
  });
  return data;
};

export const updateOrderStatus = async (
  id,
  status,
  prepare,
  onWay,
  delivered,
  cancel
) => {
  const { data } = await axios.put(`http://localhost:4000/orders/${id}`, {
    status,
    prepare,
    onWay,
    delivered,
    cancel,
  });
  return data;
};

export const deleteOrder = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/orders/${id}`);
  return data;
};
