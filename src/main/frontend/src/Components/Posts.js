import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    const result = await axios.get("//localhost:8080/api/v1/post");

    setPostList(result.data);
  };

  useEffect(() => {
    getPostList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <>
      {postList.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            제목: {post.title}
            <br />
            <br />
          </Link>
        </li>
      ))}
    </>
  );
};

export default Posts;
