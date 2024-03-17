import axios from "axios";

export const getAllProducts = async () => {
<<<<<<< HEAD
  const { data } = await axios.get(`http://localhost:4000/products`);
=======
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/products`
  );
>>>>>>> upstream/main
  return data;
};

export const getProductById = async (id) => {
<<<<<<< HEAD
  const { data } = await axios.get(`http://localhost:4000/products/${id}`);
=======
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}`
  );
>>>>>>> upstream/main
  return data;
};

export const getProductByPrice = async (lowest, uppest) => {
  const { data } = await axios.post(
<<<<<<< HEAD
    `http://localhost:4000/products/query/price`,
=======
    `${process.env.REACT_APP_API_BASE_URL}/products/query/price`,
>>>>>>> upstream/main
    {
      lowest,
      uppest,
    }
  );
  return data;
};

export const getProductByCategoryId = async (id) => {
  const { data } = await axios.get(
<<<<<<< HEAD
    `http://localhost:4000/products/category/${id}`
=======
    `${process.env.REACT_APP_API_BASE_URL}/products/category/${id}`
>>>>>>> upstream/main
  );
  return data;
};

export const getProductByColor = async (color, lowest, uppest) => {
  const { data } = await axios.post(
<<<<<<< HEAD
    `http://localhost:4000/products/color/${color}`,
=======
    `${process.env.REACT_APP_API_BASE_URL}/products/color/${color}`,
>>>>>>> upstream/main
    {
      lowest,
      uppest,
    }
  );
  return data;
};

<<<<<<< HEAD
export const getProductByGender = async (gender, lowest, uppest) => {
  const { data } = await axios.post(
    `http://localhost:4000/products/gender/${gender}`,
=======
export const getProductByCondition = async (condition, lowest, uppest) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/products/condition/${condition}`,
>>>>>>> upstream/main
    {
      lowest,
      uppest,
    }
  );
  return data;
};

export const getProductByStatus = async (status) => {
  const { data } = await axios.get(
<<<<<<< HEAD
    `http://localhost:4000/products/status/${status}`
=======
    `${process.env.REACT_APP_API_BASE_URL}/products/status/${status}`
>>>>>>> upstream/main
  );
  return data;
};

export const getProductBySearch = async (search) => {
  const { data } = await axios.get(
<<<<<<< HEAD
    `http://localhost:4000/products/search/${search}`
=======
    `${process.env.REACT_APP_API_BASE_URL}/products/search/${search}`
>>>>>>> upstream/main
  );
  return data;
};

<<<<<<< HEAD
export const getProductsByQueries = async (lowest, uppest, gender, color) => {
  const { data } = await axios.post(
    `http://localhost:4000/products/query/full`,
    {
      lowest,
      uppest,
      gender,
=======
export const getProductsByQueries = async (
  lowest,
  uppest,
  condition,
  color
) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/products/query/full`,
    {
      lowest,
      uppest,
      condition,
>>>>>>> upstream/main
      color,
    }
  );
  return data;
};

export const addProduct = async (
  imageUrl,
  name,
  color,
<<<<<<< HEAD
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
=======
  shipingLocations,
  description,
  category,
  condition,
  price
) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/products`,
    {
      imageUrl,
      name,
      color,
      shipingLocations,
      description,
      category,
      condition,
      price,
    }
  );
>>>>>>> upstream/main
  return data;
};

export const updateProduct = async (id, name, description, price) => {
<<<<<<< HEAD
  const { data } = await axios.put(`http://localhost:4000/products/${id}`, {
    name,
    description,
    price,
  });
=======
  const { data } = await axios.put(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}`,
    {
      name,
      description,
      price,
    }
  );
>>>>>>> upstream/main
  return data;
};

export const deleteProduct = async (id) => {
<<<<<<< HEAD
  const { data } = await axios.delete(`http://localhost:4000/products/${id}`);
=======
  const { data } = await axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/products/${id}`
  );
>>>>>>> upstream/main
  return data;
};
