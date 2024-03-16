import axios from 'axios';

export const getAllUsers = async () => {
  const { data } = await axios.get(`http://localhost:4000/users`);
  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/users/${id}`);
  return data;
};

export const updateUser = async (id, address, phone) => {
  const { data } = await axios.put(`http://localhost:4000/users/${id}`, {
    address,
    phone,
  });
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/users/${id}`);
  return data;
};

export const addFavorite = async (id, productId) => {
  const { data } = await axios.post(
    `http://localhost:4000/users/${id}/favorite/${productId}`
  );
  return data;
};

export const deleteFavorite = async (id, productId) => {
  const { data } = await axios.delete(
    `http://localhost:4000/users/${id}/favorite/${productId}`
  );
  return data;
};
