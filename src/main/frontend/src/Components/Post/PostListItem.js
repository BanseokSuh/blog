import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import MarkdownRenderer from "../../Lib/Markdown/MarkdownRenderer";
import { format } from "date-fns";

const PostListItem = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [time, setTime] = useState(null);

  const getPost = async (postId) => {
    const result = await axios.get(`//localhost:8080/api/v1/post/${postId}`);
    setTime(format(new Date(result.data.createdDate), "yyyy-MM-dd"));
    setPost(result.data);
  };

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <PostCreatedDate>{time}</PostCreatedDate>
      <PostContent>
        <MarkdownRenderer markdown={post.content} />
      </PostContent>
    </>
  );
};

const PostTitle = styled.div`
  font-size: 2.7rem;
  margin-top: 1.8rem;
`;

const PostCreatedDate = styled.div`
  margin-top: 1rem;

  color: gray;
  font-size: 1.1rem;
`;

const PostContent = styled.div`
  margin-top: 3rem;
`;

export default PostListItem;
