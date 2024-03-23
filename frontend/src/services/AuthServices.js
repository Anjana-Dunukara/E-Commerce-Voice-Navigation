import axios from 'axios';

export const Register = async (firstName, lastName, email, password, phone) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/register`,
      {
        firstName,
        lastName,
        email,
        password,
        phone,
      }
    );
  } catch (error) {
    throw new Error(`Error registering user: ${error.message}`);
  }
};

export const Login = async (email, password) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/login`,
      {
        email,
        password,
      }
    );
  } catch (error) {
    throw new Error(`Error logging in: ${error.message}`);
  }
};
