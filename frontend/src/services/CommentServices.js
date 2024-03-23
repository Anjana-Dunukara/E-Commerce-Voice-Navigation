import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllComments = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/comments`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching all comments: ${error.message}`);
  }
};

export const getCommentById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/comments/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching comment by ID: ${error.message}`);
  }
};

export const getCommentByAuthorId = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/comments/author/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching comments by author ID: ${error.message}`);
  }
};

export const getCommentByProductId = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/comments/product/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching comments by product ID: ${error.message}`);
  }
};

export const getCommentByAuthorProductId = async (author, id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/comments/product/${id}`,
    {
      author: author,
    }
  );
  return data;
};

export const addComment = async (productId, comment, author) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/comments`, {
      for: productId,
      comment,
      author,
    });
    return data;
  } catch (error) {
    throw new Error(`Error adding comment: ${error.message}`);
  }
};

export const updateComment = async (id, productId, comment, author) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/comments/${id}`, {
      for: productId,
      comment,
      author,
    });
    return data;
  } catch (error) {
    throw new Error(`Error updating comment: ${error.message}`);
  }
};

export const deleteComment = async (id) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/comments/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error deleting comment: ${error.message}`);
  }
};
