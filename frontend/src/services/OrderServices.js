import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllOrders = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/orders`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching all orders: ${error.message}`);
  }
};

export const getOrderById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/orders/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching order by ID: ${error.message}`);
  }
};

export const getOrdersByStatus = async (status) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/orders/status/${status}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching orders by status: ${error.message}`);
  }
};

export const getOrdersByUserId = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/orders/user/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching orders by user ID: ${error.message}`);
  }
};

export const addOrder = async (products, buyer, address) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/orders`, {
      products,
      buyer,
      address,
    });
    return data;
  } catch (error) {
    throw new Error(`Error adding order: ${error.message}`);
  }
};

export const updateOrderStatus = async (
  id,
  status,
  prepare,
  onWay,
  delivered,
  cancel
) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/orders/${id}`, {
      status,
      prepare,
      onWay,
      delivered,
      cancel,
    });
    return data;
  } catch (error) {
    throw new Error(`Error updating order status: ${error.message}`);
  }
};

export const deleteOrder = async (id) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/orders/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error deleting order: ${error.message}`);
  }
};
