import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import MDEditor from "@uiw/react-md-editor";

const PostWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("제목을 입력하세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력하세요.");
      return;
    }

    try {
      const response = await axios.post("//localhost:8080/api/v1/post", {
        title,
        content,
      });

      if (response.status === 200) {
        alert("게시글이 등록되었습니다.");
        setTitle("");
        setContent("");

        navigate("/category/post");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <TitleInput
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <ContentInput
          value={content}
          placeholder="내용을 입력하세요."
          onChange={(e) => setContent(e.target.value)}
        />
        {/* <div data-color-mode="light">
          <MDEditor height={865} value={content} />
        </div> */}
      </div>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  text-align: right;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 1.6rem;
  margin-bottom: 1rem;
`;

const ContentInput = styled.textarea`
  width: 100%;
  min-height: 20rem;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background-color: #d94844;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px;
`;

export default PostWrite;
