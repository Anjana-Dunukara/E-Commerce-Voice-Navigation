import axios from 'axios';

export const getAllRatings = async () => {
  const { data } = await axios.get(`http://localhost:4000/ratings`);
  return data;
};

export const getRatingById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/ratings/${id}`);
  return data;
};

export const getRatingByOwnerId = async (ownerId) => {
  const { data } = await axios.get(
    `http://localhost:4000/ratings/owner/${ownerId}`
  );
  return data;
};

export const getRatingByProductId = async (productId) => {
  const { data } = await axios.get(
    `http://localhost:4000/ratings/product/${productId}`
  );
  return data;
};

export const addRating = async (product, rating, owner) => {
  const { data } = await axios.post(`http://localhost:4000/ratings`, {
    for: product,
    rating,
    owner,
  });
  return data;
};

export const updateRating = async (id, product, rating, owner) => {
  const { data } = await axios.put(`http://localhost:4000/ratings/${id}`, {
    for: product,
    rating,
    owner,
  });
  return data;
};

export const deleteRating = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/ratings/${id}`);
  return data;
};
