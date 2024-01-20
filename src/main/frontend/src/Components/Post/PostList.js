import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const getPostList = async (postSearchRequest) => {
    const result = await axios.get("//localhost:8080/api/v1/post", {
      params: postSearchRequest,
    });

    setPostList(result.data);
  };

  useEffect(() => {
    const postSearchRequest = {
      page: 1,
      size: 10,
    };
    getPostList(postSearchRequest); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <>
      {postList.map((post) => (
        <li key={post.id}>
          <Link to={`/category/post/${post.id}`}>
            제목: {post.title}
            <br />
            작성일: {post.createdDate}
            <br />
            <br />
          </Link>
        </li>
      ))}
    </>
  );
};

export default PostList;
