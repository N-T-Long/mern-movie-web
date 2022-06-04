import axiosClient from "./axiosClient";

const userApi = {
  getProfile: (params) => {
    const url = "/user/profile";
    return axiosClient.get(url, { params });
  },
};

export default userApi;
