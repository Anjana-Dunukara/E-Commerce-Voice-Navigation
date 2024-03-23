import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/users`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching all users: ${error.message}`);
  }
};

export const getUserById = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/users/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching user by ID: ${error.message}`);
  }
};

export const updateUser = async (id, address, phone) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
      {
        address,
        phone,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/users/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

export const addFavorite = async (id, productId) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/${id}/favorite/${productId}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error adding favorite: ${error.message}`);
  }
};

export const deleteFavorite = async (id, productId) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/users/${id}/favorite/${productId}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error deleting favorite: ${error.message}`);
  }
};
