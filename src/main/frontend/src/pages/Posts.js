import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Posts = () => {
  const [postsList, setPostsList] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/post")
      .then((response) => {
        console.log(response);
        setPostsList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>글 목록</h1>
      <p>data from backend: {postsList}</p>
    </div>
  );
};

export default Posts;
