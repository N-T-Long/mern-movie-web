import axiosClient from "./axiosClient";

const adminApi = {
  getAllMovies: (params) => {
    const url = "/admin/movies";
    return axiosClient.get(url, { params });
  },
  getAllUsers: (params) => {
    const url = "/admin/users";
    return axiosClient.get(url, { params });
  },
  addNewMovie: (params) => {
    const url = "/admin/movies/create";
    return axiosClient.post(url, params);
  },
  removeMovie: (movieID) => {
    const url = `/admin/movies/${movieID}/delete`;
    return axiosClient.post(url);
  },
  removeUser: (userID) => {
    const url = `/admin/users/${userID}/delete`;
    return axiosClient.post(url);
  },
  addNewSlide: (params) => {
    const url = "/admin/slides/create";
    return axiosClient.post(url, params);
  },
  addNewEpisode: (movieID, data) => {
    const url = `/admin/movies/${movieID}/episodes/create`;
    return axiosClient.patch(url, data);
  },
};

export default adminApi;
