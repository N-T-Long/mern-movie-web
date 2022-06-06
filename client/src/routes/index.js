import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Profile from "../page/User/Profile";
import Search from "../page/Search";
import WatchMovie from "../page/WatchMovie";
import NotFound from "../page/NotFound";
import SignIn from "../page/Auth/SignIn";
import SignUp from "../page/Auth/SignUp";
import Admin from "../page/Admin";
const PublicRoutes = [
  { path: "/", component: Home },
  { path: "/xem-phim/", component: WatchMovie },
  { path: "/tim-kiem", component: Search },
  { path: "dang-ky", component: SignUp },
  { path: "dang-nhap", component: SignIn },
  { path: "tai-khoan", component: Profile },
  { path: "/*", component: NotFound },
];

// <Route exact path="/" element={<Home />} />
// <Route path="/xem-phim" element={<WatchMovie />} />
// <Route path="/tim-kiem" element={<Search />} />
// <Route path="/dang-ky" element={<SignUp />} />
// <Route path="/dang-nhap" element={<SignIn />} />
// <Route path="/tai-khoan" element={<Profile />} />
// <Route path="/*" element={<NotFound />} />

const PrivateRoutes = [{ path: "/admin", component: Admin }];

// <Route path="/admin" element={<Admin />} />;

export { PrivateRoutes, PublicRoutes };
