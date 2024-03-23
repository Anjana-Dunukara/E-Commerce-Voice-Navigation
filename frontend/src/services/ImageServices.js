import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllImages = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/images`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching all images: ${error.message}`);
  }
};

export const getImageById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/images/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching image by ID: ${error.message}`);
  }
};

export const addImage = async (url) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/images`, { url });
    return data;
  } catch (error) {
    throw new Error(`Error adding image: ${error.message}`);
  }
};

export const deleteImage = async (id) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/images/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error deleting image: ${error.message}`);
  }
};

export const getAllMiniImages = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/minis`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching all mini images: ${error.message}`);
  }
};

export const getMiniImageById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/minis/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching mini image by ID: ${error.message}`);
  }
};

export const addMiniImage = async (url) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/minis`, { url });
    return data;
  } catch (error) {
    throw new Error(`Error adding mini image: ${error.message}`);
  }
};

export const deleteMiniImage = async (id) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/minis/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error deleting mini image: ${error.message}`);
  }
};

export const uploadImageToCloudinary = async (image) => {
  try {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'd1qunvml');
    data.append('cloud_name', 'dn8ypojvn');
    const result = await fetch(
      `https://api.cloudinary.com/v1_1/dn8ypojvn/image/upload`,
      {
        method: 'POST',
        body: data,
      }
    ).then((res) => res.json());
    return result;
  } catch (error) {
    throw new Error(`Error uploading image to Cloudinary: ${error.message}`);
  }
};
