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
};

export default userApi;
