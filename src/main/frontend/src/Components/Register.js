import React, { useState } from "react";
import styled from "styled-components";

const Register = () => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDomainChange = (e) => {
    setEmailDomain(e.target.value);
  };

  const checkDuplicateId = () => {};

  const emailDomains = ["gmail.com", "naver.com", "hotmail.com", "yahoo.com"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User ID: ${userId}, Password: ${password}`);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <IdInputWrapper>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요."
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <IdDuplicateCheckButton onClick={() => checkDuplicateId()}>
            중복확인
          </IdDuplicateCheckButton>
        </IdInputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이름을 입력해주세요."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>
        <EmailInputWrapper>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요."
            required
            value={email}
            onChange={handleEmailChange}
          />
          @
          <EmailSelect value={emailDomain} onChange={handleDomainChange}>
            {emailDomains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </EmailSelect>
        </EmailInputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="비밀번호를 확인해주세요."
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="핸드폰 번호를 입력해주세요."
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <RegisterButton type="submit">Register</RegisterButton>
        </InputWrapper>
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
  width: 25vw;
  padding: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IdDuplicateCheckButton = styled.button`
  width: 30%;
  height: 2.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
`;

const EmailInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const EmailSelect = styled.select`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
`;

// const InputKey = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RegisterButton = styled.button`
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

export default Register;
