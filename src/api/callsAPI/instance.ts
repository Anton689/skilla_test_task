import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;

export const instanceCalls = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});
