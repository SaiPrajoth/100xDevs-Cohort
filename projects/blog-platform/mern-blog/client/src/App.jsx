import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Header from './Header'
import Layout from "./Layout";
import Post from './Post';
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage/>} ></Route>
        <Route
          path="/login"
          element={<LoginPage/>}
        ></Route>
        <Route
          path="/register"
          element={<RegisterPage/>}
        ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
