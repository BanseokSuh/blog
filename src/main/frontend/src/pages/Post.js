import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Posts = () => {
  const [postList, setPostList] = useState("");

  // api 요청
  useEffect(() => {
    axios
      .get("/api/v1/post")
      .then((response) => {
        console.log(response);
        setPostList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>글 목록</h1>
      <p>
        {JSON.stringify(postList)}
        {/* {postList.map((post) => console.log(post))} */}
      </p>
    </div>
  );
};

export default Posts;
