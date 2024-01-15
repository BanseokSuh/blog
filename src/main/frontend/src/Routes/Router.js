import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, PostList, Login, PostListItem, ProjectList } from "./index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category/post" element={<PostList />} />
      <Route path="/category/post/:postId" element={<PostListItem />} />
      <Route path="/category/project" element={<ProjectList />} />
    </Routes>
  );
};

export default Router;
