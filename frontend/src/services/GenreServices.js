import axios from 'axios';

export const getAllGenres = async () => {
  const { data } = await axios.get(`http://localhost:4000/genres`);
  return data;
};

export const getGenreById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/genres/${id}`);
  return data;
};

export const addGenre = async (name, status) => {
  const { data } = await axios.post(`http://localhost:4000/genres`, {
    name,
    status,
  });
  return data;
};

export const updateGenre = async (id, name, status) => {
  const { data } = await axios.put(`http://localhost:4000/genres/${id}`, {
    name,
    status,
  });
  return data;
};

export const deleteGenre = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/genres/${id}`);
  return data;
};
