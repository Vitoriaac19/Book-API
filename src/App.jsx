import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/index.jsx";
import Layout from "./components/Layout"
import Home from "./components/Home"
import Books from "./components/Books"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>;
            <Route index element={<Home />}/>;
            <Route path="/books" element={<Books/>} />;
            <Route path="/login" element={<Login />} />;
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;