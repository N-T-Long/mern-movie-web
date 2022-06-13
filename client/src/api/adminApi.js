import axiosClient from "./axiosClient";

const adminApi = {
  getAllCountries: (params) => {
    const url = "/admin/movie";
    return axiosClient.get(url, { params });
  },
  addNewMovie: (params) => {
    const url = "/admin/movies/create";
    return axiosClient.post(url, params);
  },
};

export default adminApi;
