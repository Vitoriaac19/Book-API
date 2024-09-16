import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/index.jsx";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Books from "./components/Books";
import AddBook from "./components/AddBook/index.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

export const TokenContext = createContext();

function App() {
  const [token, setToken] = useState("");

  return (
    <AuthProvider>
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="books" element={<Books />} />
              <Route path="login" element={<Login />} />
              <Route path="addbook" element={<AddBook />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </AuthProvider>
  );
}

export default App;
