import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Update from "./pages/Home/Update";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/update" element={<Update />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Navigate to="/register" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
