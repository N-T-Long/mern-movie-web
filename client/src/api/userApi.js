import axiosClient from "./axiosClient";

const userApi = {
  getProfile: (params) => {
    const url = "/user/profile";
    return axiosClient.get(url, { params });
  },
  signIn: (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
};

export default userApi;
