import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

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
      <TitleInputWrapper>
        <TitleInput
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
        />
      </TitleInputWrapper>
      <MDEditorWrapper>
        <div data-color-mode="light">
          <MDEditor height={700} value={content} onChange={setContent} />
        </div>
      </MDEditorWrapper>
      <ButtonWrapper>
        <SubmitButton type="submit">발행</SubmitButton>
      </ButtonWrapper>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  text-align: center;
  margin-bottom: 7rem;
`;

const TitleInputWrapper = styled.div`
  width: 100%;
`;

const MDEditorWrapper = styled.div`
  white-space: pre-wrap;
  margin-bottom: 3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  font-size: 1.5rem;
`;

const SubmitButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px;
`;

export default PostWrite;
