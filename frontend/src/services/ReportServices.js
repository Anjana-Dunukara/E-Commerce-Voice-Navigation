import axios from 'axios';

export const getAllReports = async () => {
  const { data } = await axios.get(`http://localhost:4000/reports`);
  return data;
};

export const getReportById = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/reports/${id}`);
  return data;
};

export const getReportByUserId = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/reports/user/${id}`);
  return data;
};

export const addReport = async (orderId, userId, content) => {
  const { data } = await axios.post(`http://localhost:4000/reports`, {
    orderId,
    userId,
    content,
  });
  return data;
};

export const updateReport = async ({
  id,
  orderId,
  userId,
  content,
  status,
}) => {
  const { data } = await axios.put(`http://localhost:4000/reports/${id}`, {
    orderId,
    userId,
    content,
    status,
  });
  return data;
};

export const deleteReport = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/reports/${id}`);
  return data;
};
