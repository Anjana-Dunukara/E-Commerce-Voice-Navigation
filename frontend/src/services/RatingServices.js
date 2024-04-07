import axios from 'axios';

export const getAllRatings = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/ratings`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching all ratings: ${error.message}`);
  }
};

export const getRatingById = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/ratings/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching rating by ID: ${error.message}`);
  }
};

export const getRatingByOwnerId = async (ownerId) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/ratings/owner/${ownerId}`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('No ratings found for the provided owner ID');
    } else {
      throw new Error('Error fetching ratings by owner');
    }
  }
};

export const getRatingByProductId = async (productId) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/ratings/product/${productId}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching rating by product ID: ${error.message}`);
  }
};

export const getUserData = async (userId) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/ratings/author/${userId}`
  );
  return data;
};

export const addRating = async (product, rating, owner) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/ratings`,
      {
        for: product,
        rating,
        owner,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error adding rating: ${error.message}`);
  }
};

export const updateRating = async (id, product, rating, owner) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/ratings/${id}`,
      {
        for: product,
        rating,
        owner,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error updating rating: ${error.message}`);
  }
};

export const deleteRating = async (id) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/ratings/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error deleting rating: ${error.message}`);
  }
};
