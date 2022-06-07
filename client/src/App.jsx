import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {PrivateRoutes, PublicRoutes} from "./routes/index";
import DefaultLayout from "./layout/DefaultLayout"
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import {isSignIn} from "./redux-toolkit/slice/auth"
import userApi from "./api/userApi"

function App() {
  const token = window.localStorage.getItem("token")
  const dispatch = useDispatch();

  useEffect( () => {
    if (token)  {
        const updateStore = async () => {

          const userInfo = await userApi.getProfile();
          const action = isSignIn({...userInfo.user, token: token });
          dispatch(action)
        }
        updateStore();
    }
    
  },[])


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

      </Routes>

    </div>
  );
}

export default App;
