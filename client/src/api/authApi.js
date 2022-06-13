import axiosClient from "./axiosClient";

const authApi = {
  getProfile: (params) => {
    const url = "/user/profile";
    return axiosClient.get(url, { params });
  },
  loggin: (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  register: (data) => {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  },
};

export default authApi;
