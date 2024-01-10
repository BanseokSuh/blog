import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Posts, Login, PostDetail, Projects } from "./index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Router;
