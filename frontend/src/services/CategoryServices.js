import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/categories`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching all categories: ${error.message}`);
  }
};

export const getCategoryByGenre = async (genre) => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/categories/genre/${genre}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching categories by genre: ${error.message}`);
  }
};

export const getCategoryById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/categories/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching category by ID: ${error.message}`);
  }
};

export const addCategory = async (name, genre, status) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/categories`, {
      name,
      genre,
      status,
    });
    return data;
  } catch (error) {
    throw new Error(`Error adding category: ${error.message}`);
  }
};

export const updateCategory = async (id, name, genre, status) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/categories/${id}`, {
      name,
      genre,
      status,
    });
    return data;
  } catch (error) {
    throw new Error(`Error updating category: ${error.message}`);
  }
};

export const deleteCategory = async (id) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/categories/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error deleting category: ${error.message}`);
  }
};
