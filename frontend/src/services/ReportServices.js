import axios from 'axios';

export const getAllReports = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/reports`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching all reports: ${error.message}`);
  }
};

export const getReportById = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/reports/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching report by ID: ${error.message}`);
  }
};

export const getReportByUserId = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/reports/user/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error fetching report by user ID: ${error.message}`);
  }
};

export const addReport = async (orderId, userId, content) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/reports`,
      {
        orderId,
        userId,
        content,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error adding report: ${error.message}`);
  }
};

export const updateReport = async ({
  id,
  orderId,
  userId,
  content,
  status,
}) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/reports/${id}`,
      {
        orderId,
        userId,
        content,
        status,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Error updating report: ${error.message}`);
  }
};

export const deleteReport = async (id) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/reports/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error deleting report: ${error.message}`);
  }
};
