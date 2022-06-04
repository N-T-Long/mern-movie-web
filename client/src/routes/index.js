import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Profile from "../page/Profile";
import Search from "../page/Search";
import WatchMovie from "../page/WatchMovie";
import NotFound from "../page/NotFound";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/xem-phim" element={<WatchMovie />} />
      <Route path="/tai-khoan" element={<Profile />} />
      <Route path="/tim-kiem" element={<Search />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;