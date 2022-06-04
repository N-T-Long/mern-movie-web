let movies = [
  {
    name: "Phim 1",
    year: "2022",
    country: "My",
    type: "Phim le",
    Genres: "Hanh dong",
  },
  {
    name: "Phim 2",
    year: "2021",
    country: "Han Quoc",
    type: "Phim bo",
    Genres: "Co trang",
  },
  {
    name: "Phim 3",
    year: "2020",
    country: "Anh",
    type: "Phim bo",
    Genres: "Hai huoc",
  },
  {
    name: "Phim 4",
    year: "2019",
    country: "Trung Quoc",
    type: "Phim le",
    Genres: "Kinh di",
  },
  {
    name: "Phim 5",
    year: "2018",
    country: "Han Quoc",
    type: "Phim bo",
    Genres: "Hinh su",
  },
  {
    name: "Phim 6",
    year: "2017",
    country: "Thai Lan",
    type: "Phim le",
    Genres: "Chien tranh",
  },
  {
    name: "Phim 7",
    year: "2016",
    country: "Viet Nam",
    type: "Phim le",
    Genres: "Vien tuong",
  },
  {
    name: "Phim 8",
    year: "2015",
    country: "Nhat Ban",
    type: "Phim bo",
    Genres: "Tam ly",
  },
  {
    name: "Phim 9",
    year: "2014",
    country: "Nga",
    type: "Phim le",
    Genres: "Hoat hinh",
  },
  {
    name: "Phim 10",
    year: "Canada",
    country: "My",
    type: "Phim le",
    Genres: "Tinh cam, Lang man",
  },
  {
    name: "Phim 11",
    year: "2012",
    country: "An do",
    type: "Phim bo",
    Genres: "Bom tan",
  },
  {
    name: "Phim 12",
    year: "2011",
    country: "Nga",
    type: "Phim le",
    Genres: "Gameshow",
  },
];

export function getMovies() {
  return movies;
}
export function getMovie(number) {
  return movies.find((movie) => movie.number === number);
}
export function deleteMovie(number) {
  movies = movies.filter((movie) => movie.number !== number);
}
