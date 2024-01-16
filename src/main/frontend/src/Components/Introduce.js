import React from "react";
import styled from "styled-components";
import photo from "../Assets/images/profile_v2.png";

const Introduce = () => {
  return (
    <Container>
      {/* 사진 영역 */}
      <Photo>
        <img src={photo} alt="Profile" />
      </Photo>

      {/* 개인정보 영역 */}
      <Information>
        <div>이름: 서반석</div>
        <div>이메일: still3028@gmail.com</div>
        <div>전화번호: 010-3967-3012</div>
      </Information>
    </Container>
  );
};

export default Introduce;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Photo = styled.div`
  width: 25%;
  min-height: 20rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Information = styled.div`
  width: 75%;
  padding: 1.5rem;
`;
