import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Login, Post } from "./index";

const Router = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/post" element={<Post />} />
  </Routes>;
};

export default Router;
