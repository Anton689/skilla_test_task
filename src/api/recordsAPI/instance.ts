import axios from 'axios';

export const instanceRecords = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_RECORDS,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});
