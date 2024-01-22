import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
// import MarkdownRenderer from "../../Lib/Markdown/MarkdownRenderer";
// import ReactMarkdown from "react-markdown";
// import { format } from "date-fns";

const PostListItem = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async (postId) => {
    const result = await axios.get(`//localhost:8080/api/v1/post/${postId}`);
    setPost(result.data);
  };

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <PostCreatedDate>
        {post.createdDate}
        {/* {format(new Date(post.createdDate), "yyyy.MM.dd hh:mm")} */}
        {/* {format(new Date(post.createdDate), "yyyy-MM-dd")} */}
      </PostCreatedDate>
      {/* <MarkdownRenderer>{post.content}</MarkdownRenderer> */}
      {/* <MarkdownRenderer markdown={post.content} /> */}
      <PostContent>{post.content}</PostContent>
      {/* <ReactMarkdown breaks>{post.content}</ReactMarkdown> */}
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
  margin-top: 5rem;
  font-size: 1.5rem;
  line-height: 2.2rem;
  white-space: pre-wrap;
`;

export default PostListItem;
