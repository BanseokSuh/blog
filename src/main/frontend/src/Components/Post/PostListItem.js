import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import MarkdownRenderer from "../../Lib/Markdown/MarkdownRenderer";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const PostListItem = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [time, setTime] = useState(null);

  const navigate = useNavigate();

  const getPost = async (postId) => {
    const result = await axios.get(`//localhost:8080/api/v1/post/${postId}`);
    setTime(format(new Date(result.data.createdAt), "yyyy-MM-dd"));
    setPost(result.data);
  };

  const deletePost = async (postId) => {
    const result = await axios.delete(`//localhost:8080/api/v1/post/${postId}`);

    if (result.status === 200) {
      alert("게시글이 삭제되었습니다.");
      navigate("/category/post");
    }
  };

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <PostListItemWrapper>
      <ButtonContainer>
        {/* <Link to="/category/post/detail">
          <PostModifyButton>수정</PostModifyButton>
        </Link> */}
        <Link to={`/category/post/detail/${post.id}`}>
          <PostModifyButton>수정</PostModifyButton>
        </Link>
        <PostDeleteButton onClick={() => deletePost(post.id)}>
          삭제
        </PostDeleteButton>
      </ButtonContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostCreatedDate>{time}</PostCreatedDate>
      <PostContent>
        <MarkdownRenderer markdown={post.content} />
      </PostContent>
    </PostListItemWrapper>
  );
};

const PostListItemWrapper = styled.div`
  margin-bottom: 8rem;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const PostModifyButton = styled.button`
  width: 3.2rem;
  height: 2.4rem;
  border: none;
  color: black;
  font-size: 15px;
  // font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
`;

const PostDeleteButton = styled.button`
  width: 3.2rem;
  height: 2.4rem;
  margin-left: 0.5rem;
  border: none;
  color: white;
  background-color: #f44336;
  font-size: 15px;
  cursor: pointer;
  border-radius: 4px;
`;

const PostTitle = styled.div`
  font-size: 2.7rem;
  // margin-top: 1.8rem;
`;

const PostCreatedDate = styled.div`
  margin: 1rem 0 3rem 0;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #e0e0e0;

  color: gray;
  font-size: 1.1rem;
`;

const PostContent = styled.div`
  margin-top: 3rem;
`;

export default PostListItem;
