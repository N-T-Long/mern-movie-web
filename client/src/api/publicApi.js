import axiosClient from "./axiosClient";

const publicApi = {
  getCategories: () => {
    let url = "/categories";
    return axiosClient.get(url);
  },
  getMovies: (a) => {
    let url = "/movies";

    return axiosClient.get(url, { params: a });
  },
  getMovieByURL: (movieURL) => {
    let url = `/movies/url/${movieURL}`;
    return axiosClient.get(url);
  },
  getSlides: () => {
    let url = "/slides";
    return axiosClient.get(url);
  },
  getGenres: () => {
    let url = "/genres";
    return axiosClient.get(url);
  },
  getCountries: () => {
    let url = "/countries";
    return axiosClient.get(url);
  },
  getMovie: (movieID) => {
    let url = `/movies/${movieID}`;
    return axiosClient.get(url);
  },
  updateViews: (movieID) => {
    let url = `/movies/${movieID}/newView`;
    return axiosClient.patch(url);
  },
};

export default publicApi;
