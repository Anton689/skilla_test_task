import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;

export const instanceRecords = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_RECORDS,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
