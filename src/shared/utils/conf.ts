import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

axios.defaults.baseURL = process.env.REACT_APP_API;
