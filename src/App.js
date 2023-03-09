import "./App.css";
import "./css/header.css";
import "./css/menu.css";
import "./css/test.css";
import Main from "./components/Main/main.jsx";
import Layout from "./components/layout/Layout";
import Render from "./components/useEffect/render";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePage from "./components/SinglePage/SinglePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Main/>}/>     
        <Route path={"/single/:id"} element={<SinglePage/>}/>
				<Route path="*" element={<Main />} />
    </Routes>
        <Render/>
    </BrowserRouter>
  );
}


export default App;
