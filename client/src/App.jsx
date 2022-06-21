import { Route, Routes ,useLocation } from "react-router-dom";
import {PrivateRoutes, PublicRoutes} from "./routes/index";
import DefaultLayout from "./layout/DefaultLayout"
import AdminLayout from "./layout/AdminLayout"
import "./App.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "./redux-toolkit/slice/movie";
import { publicActions } from "./redux-toolkit/slice/public";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const role = useSelector(state => state.auth.role)
  useEffect( () => {
    const isWatchMovie =  (location.pathname.split("/")[1] === "xem-phim") ? true : false;

    if (!isWatchMovie) 
      dispatch(movieActions.unSelected())
  }, [location])

  useEffect( () => {

    dispatch(publicActions.loadingData())

  }, [])

  return (
    <div className="App">
      <Routes>
        
        {/* Public routes */}
        
        {
      
        PublicRoutes.map((route, index) =>{
          const Page = route.component;
          return <Route path={route.path} key={index}
          element={
            <DefaultLayout>
              <Page/>
            </DefaultLayout>} />
        })
        }
      

        {/* Admin routes */}
      {
        
        (role && role === "admin")? 
        (
          PrivateRoutes.map((route, index) =>{
            const Page = route.component;
            return <Route path={route.path} key={index}
            element={
              <AdminLayout>
                <Page/>
              </AdminLayout>} />
          })
        )
        : 
        <></>
        }
      </Routes>
    </div>
  );
}

export default App;
