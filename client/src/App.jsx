import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Header";
import PublicRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Headers />
      <div className="content" >
        <PublicRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;