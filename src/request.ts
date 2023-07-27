import axios from "axios";

export const config = {
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const request = axios.create(config);
