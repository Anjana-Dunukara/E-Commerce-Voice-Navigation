import axios from 'axios';

export const getAllProducts = async () => {
  const { data } = await axios.get(`http://localhost:4000/products`);
  return data;
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/products/${id}`);
  return data;
};

export const getProductByPrice = async (lowest, uppest) => {
  const { data } = await axios.post(
    `http://localhost:4000/products/query/price`,
    {
      lowest,
      uppest,
    }
  );
  return data;
};

export const getProductByCategoryId = async (id) => {
  const { data } = await axios.get(
    `http://localhost:4000/products/category/${id}`
  );
  return data;
};

export const getProductByColor = async (color, lowest, uppest) => {
  const { data } = await axios.post(
    `http://localhost:4000/products/color/${color}`,
    {
      lowest,
      uppest,
    }
  );
  return data;
};

export const getProductByGender = async (gender, lowest, uppest) => {
  const { data } = await axios.post(
    `http://localhost:4000/products/gender/${gender}`,
    {
      lowest,
      uppest,
    }
  );
  return data;
};

export const getProductByStatus = async (status) => {
  const { data } = await axios.get(
    `http://localhost:4000/products/status/${status}`
  );
  return data;
};

export const getProductBySearch = async (search) => {
  const { data } = await axios.get(
    `http://localhost:4000/products/search/${search}`
  );
  return data;
};

export const getProductsByQueries = async (lowest, uppest, gender, color) => {
  const { data } = await axios.post(
    `http://localhost:4000/products/query/full`,
    {
      lowest,
      uppest,
      gender,
      color,
    }
  );
  return data;
};

export const addProduct = async (
  imageUrl,
  name,
  color,
  sizes,
  description,
  category,
  gender,
  price
) => {
  const { data } = await axios.post(`http://localhost:4000/products`, {
    imageUrl,
    name,
    color,
    sizes,
    description,
    category,
    gender,
    price,
  });
  return data;
};

export const updateProduct = async (id, name, description, price) => {
  const { data } = await axios.put(`http://localhost:4000/products/${id}`, {
    name,
    description,
    price,
  });
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/products/${id}`);
  return data;
};
