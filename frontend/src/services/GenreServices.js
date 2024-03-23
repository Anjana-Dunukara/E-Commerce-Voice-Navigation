import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllGenres = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/genres`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching all genres: ${error.message}`);
  }
};

export const getGenreById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/genres/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching genre by ID: ${error.message}`);
  }
};

export const addGenre = async (name, status) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/genres`, {
      name,
      status,
    });
    return data;
  } catch (error) {
    throw new Error(`Error adding genre: ${error.message}`);
  }
};

export const updateGenre = async (id, name, status) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/genres/${id}`, {
      name,
      status,
    });
    return data;
  } catch (error) {
    throw new Error(`Error updating genre: ${error.message}`);
  }
};

export const deleteGenre = async (id) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/genres/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error deleting genre: ${error.message}`);
  }
};
