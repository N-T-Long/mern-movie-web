import axios from "axios";
import queryString from "query-string";
import store from "../store";
import { useDispatch } from "react-redux";
import { authConstants } from "./constants";
const token = window.localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  heades: {
    Authorization: token ? `Bearer ${token}` : "",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
