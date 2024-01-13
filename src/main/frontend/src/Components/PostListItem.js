import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostListItem = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async (postId) => {
    const result = await axios.get(`//localhost:8080/api/v1/post/${postId}`);
    console.log("result :", result);
    setPost(result.data);
  };

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <>
      <div>번호: {post.id}</div>
      <div>제목: {post.title}</div>
      <div>내용: {post.content}</div>
    </>
  );
};

export default PostListItem;
