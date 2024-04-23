import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/products`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching all products: ${error.message}`);
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/products/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by Id: ${error.message}`);
  }
};

export const getProductByPrice = async (lowest, uppest) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/products/query/price`, {
      lowest,
      uppest,
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by price: ${error.message}`);
  }
};

export const getProductByCategoryId = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/products/category/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by category ID: ${error.message}`);
  }
};

export const getProductByColor = async (color, lowest, uppest) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/products/color/${color}`,
      {
        lowest,
        uppest,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by color: ${error.message}`);
  }
};

export const getProductByCondition = async (condition, lowest, uppest) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/products/condition/${condition}`,
      {
        lowest,
        uppest,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by condition: ${error.message}`);
  }
};

export const getProductByStatus = async (status) => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/products/status/${status}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by status: ${error.message}`);
  }
};

export const getProductBySearch = async (search) => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/products/search/${search}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by search: ${error.message}`);
  }
};

export const getProductsByQueries = async (
  lowest,
  uppest,
  condition,
  color
) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/products/query/full`, {
      lowest,
      uppest,
      condition,
      color,
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching products by queries: ${error.message}`);
  }
};

export const addProduct = async (
  imageUrl,
  name,
  color,
  shipingLocations,
  description,
  category,
  condition,
  price
) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/products`, {
      imageUrl,
      name,
      color,
      shipingLocations,
      description,
      category,
      condition,
      price,
    });
    return data;
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
};

export const updateProduct = async (id, name, description, price) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/products/${id}`, {
      name,
      description,
      price,
    });
    return data;
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
};

export const deleteProduct = async (id) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/products/${id}`);
    return data;
  } catch (error) {
    throw new Error(`Error deleting product: ${error.message}`);
  }
};
