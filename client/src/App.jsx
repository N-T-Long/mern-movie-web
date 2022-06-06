import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {PrivateRoutes, PublicRoutes} from "./routes/index";
import DefaultLayout from "./layout/DefaultLayout"

function App() {
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
