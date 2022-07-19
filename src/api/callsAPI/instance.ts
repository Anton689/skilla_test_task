import axios from 'axios';

export const instanceCalls = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
});
