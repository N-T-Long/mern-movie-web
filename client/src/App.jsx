import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Header";
import PublicRoutes, {PrivateRoutes} from "./routes";
import { Provider } from "react-redux";


function App() {
  return (
    <>
    <div>
    
    <div className="App">
      <Headers />
      <div className="content" >
        <PublicRoutes />
      </div>
      <Footer />
    </div>

    </div>
    </>

  );
}

export default App;
