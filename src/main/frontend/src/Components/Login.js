import React from "react";
import styled from "styled-components";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="userId" placeholder="아이디를 입력해주세요." required />
        <Input type="userPw" placeholder="비밀번호를 입력해주세요." required />
        <SignInButton type="submit">로그인</SignInButton>
        <SignUpButton
          type="button"
          onClick={() => console.log("회원가입 버튼")}
        >
          회원가입
        </SignUpButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
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
  background-color: #e83e8c;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #e83e8c;
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
