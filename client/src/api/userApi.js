import axiosClient from "./axiosClient";

const userApi = {
  getProfile: () => {
    const url = "/user/profile";
    return axiosClient.get(url);
  },
  addNewComment: (data) => {
    const url = `/user/movies/${data.movieID}/comment/new`;
    return axiosClient.patch(url, { body: data.content });
  },
  updateNewLikeMovie: (data) => {
    const url = `/user/like-movies/new`;
    return axiosClient.patch(url, data);
  },
  getListLikedMovie: () => {
    const url = `/user/like-movies`;
    return axiosClient.get(url);
  },
};

export default userApi;
