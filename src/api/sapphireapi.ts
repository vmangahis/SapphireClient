import axios from "axios";

const SAPPHIRE_BASEURL = "https://localhost:7156/api/";

export default axios.create({
  baseURL: SAPPHIRE_BASEURL,
});

export const axiosIntercept = axios.create({
  baseURL: SAPPHIRE_BASEURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
