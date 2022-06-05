import axiosClient from "./axiosClient";

const publicApi = {
  getCategories: (params) => {
    let url = "/categories";
    return axiosClient.get(url, { params });
  },
  getMovies: (params) => {
    let url = "/movies";
    return axiosClient.get(url, { params });
  },
  getSlides: (params) => {
    let url = "/slides";
    return axiosClient.get(url, { params });
  },
  getGenres: (params) => {
    let url = "/genres";
    return axiosClient.get(url, { params });
  },
  getCountries: (params) => {
    let url = "/countries";
    return axiosClient.get(url, { params });
  },
};

export default publicApi;
