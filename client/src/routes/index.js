import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Profile from "../page/User/Profile";
import Search from "../page/Search";
import WatchMovie from "../page/WatchMovie";
import NotFound from "../page/NotFound";
import SignIn from "../page/Auth/SignIn";
import SignUp from "../page/Auth/SignUp";
import AdminHome from "../page/AdminHome/";
import AdminCreateMovie from "../page/AdminCreateMovie";
import AdminCreateSlide from "../page/AdminCreateSlide";
import PageMovieList from "../page/Movies";
import MovieList from "../page/AdminMovieList";
import UserList from "../page/AdminUserList";
import LikedMovie from "../page/User/LikedMovie";

const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/xem-phim/:movie_url", component: WatchMovie },
  { path: "/xem-phim/:movie_url/:episode_url", component: WatchMovie },
  { path: "/tim-kiem", component: PageMovieList },
  { path: "/dang-ky", component: SignUp },
  { path: "/dang-nhap", component: SignIn },
  { path: "/tai-khoan", component: Profile },
  { path: "/phim-yeu-thich", component: LikedMovie },
  { path: "/phim-le/:year", component: PageMovieList },
  { path: "/phim-bo/:genres", component: PageMovieList },
  { path: "/quoc-gia/:country", component: PageMovieList },
  { path: "/the-loai/:genres", component: PageMovieList },

  { path: "/*", component: NotFound },
];

const PrivateRoutes = [
  { path: "/admin", component: AdminHome },
  { path: "/admin/danh-sach-phim", component: MovieList },
  { path: "/admin/danh-sach-tai-khoan", component: UserList },
  { path: "/admin/trang-chu", component: AdminHome },
  { path: "/admin/tao-phim", component: AdminCreateMovie },
  { path: "/admin/tao-slide", component: AdminCreateSlide },
];

// <Route path="/admin" element={<Admin />} />;

export { PrivateRoutes, PublicRoutes };
