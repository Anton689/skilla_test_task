import axios from 'axios';

const token = 'testtoken';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});
