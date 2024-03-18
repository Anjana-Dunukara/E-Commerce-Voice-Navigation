import axios from 'axios';

export const getAllCategories = async () => {
  const { data } = await axios.get(`http://localhost:4000/categories`);
  return data;
};

export const getCategoryByGenre = async (genre) => {
  const { data } = await axios.get(
    `http://localhost:4000/categories/genre/${genre}`
  );
  return data;
};

export const getCategoryById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/categories/${id}`);
  return data;
};

export const addCategory = async (name, genre, status) => {
  const { data } = await axios.post(`http://localhost:4000/categories`, {
    name,
    genre,
    status,
  });
  return data;
};

export const updateCategory = async (id, name, genre, status) => {
  const { data } = await axios.put(`http://localhost:4000/categories/${id}`, {
    name,
    genre,
    status,
  });
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/categories/${id}`);
  return data;
};
