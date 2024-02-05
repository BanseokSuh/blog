import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("//localhost:8080/api/v1/user/login", {
      userId,
      password,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요."
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SignInButton type="submit">로그인</SignInButton>
        <SignUpButton type="button" onClick={() => navigateToRegister()}>
          회원가입
        </SignUpButton>
        {/* <SignUpButton>
          <Link to="register">회원가입</Link>
        </SignUpButton> */}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
  background-color: #f2f2f2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const Input = styled.input`
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SignInButton = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #d94844;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #d94844;
  }
`;

const SignUpButton = styled.button`
  padding: 0.8rem;
  margin-top: 0.4rem;
  border: none;
  border-radius: 4px;
  background-color: gray;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export default Login;
