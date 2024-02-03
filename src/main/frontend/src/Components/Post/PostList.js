import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";

const PostList = () => {
  const [postList, setPostList] = useState([]); // 게시글 목록
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지

  const PAGE = currentPage - 1;
  const SIZE = 7;

  const getPostList = async (postSearchRequest) => {
    const result = await axios.get("//localhost:8080/api/v1/post", {
      params: postSearchRequest,
    });

    setPostList(result.data.content); // 반환된 게시글
    setTotalPages(result.data.totalPages); // 반환된 전체 페이지
  };

  useEffect(() => {
    const postSearchRequest = {
      page: PAGE,
      size: SIZE,
    };

    getPostList(postSearchRequest); // 1) 게시글 목록 조회 함수 호출
  }, [currentPage, PAGE, SIZE]);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Link to="/category/post-write">
        <ButtonContainer>
          <PostWriteButton>글 작성하기</PostWriteButton>
        </ButtonContainer>
      </Link>
      {/* 글 목록 영역 */}
      {postList.map((post) => (
        <PostLiElement key={post.id}>
          <Link to={`/category/post/${post.id}`}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
            <PostCreatedDate>
              {format(new Date(post.createdDate), "yyyy-MM-dd")}
            </PostCreatedDate>
            <br />
          </Link>
        </PostLiElement>
      ))}
      {/* 페이징 영역 */}
      <PagingButtonContainer>
        {pageNumbers.map((number) => (
          <StyledPagingButton
            key={number}
            onClick={() => setCurrentPage(number)}
            active={number === currentPage}
          >
            {number}
          </StyledPagingButton>
        ))}
      </PagingButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  text-align: right;
`;

const PostWriteButton = styled.button`
  // display: none;
  border: none;
  color: black;
  padding: 0.4rem 1rem;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
`;

const PostLiElement = styled.li`
  margin-bottom: 0.8rem;
`;

const PostTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PostContent = styled.div`
  color: grey;
  margin-bottom: 0.5rem;
  // white-space: pre-wrap;
`;

const PostCreatedDate = styled.div`
  color: grey;
`;

const PagingButtonContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const StyledPagingButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.active ? "lightgrey" : "#FFFFFF")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#000000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (!props.active ? "lightgrey" : null)};
    color: ${(props) => (!props.active ? "#FFFFFF" : null)};
  }
`;

export default PostList;
