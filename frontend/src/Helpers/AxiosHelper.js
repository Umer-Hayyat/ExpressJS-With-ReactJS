import axios from "axios";
import { setAccessToken, getAccessToken } from "./AuthHelper";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_BASEURL,
  // timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    if (!config.url?.includes("/GetToken")) {
      config.headers = {
        Authorization: `Bearer ${getAccessToken()}`,
      };
    }
    return config;
  },
  (error) => {
    if (error.message === process.env.REACT_APP_JWT_EXPIRED_MESSAGE) {
    }
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
export const axiosGet = (url) => instance.get(url);
export const axiosPost = (url, param) => instance.post(url, param);
