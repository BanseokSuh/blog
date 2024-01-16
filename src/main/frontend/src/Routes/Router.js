import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Login, Post, PostListItem, Project } from "./index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category/post" element={<Post />} />
      <Route path="/category/post/:postId" element={<PostListItem />} />
      <Route path="/category/project" element={<Project />} />
    </Routes>
  );
};

export default Router;
