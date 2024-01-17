import React from "react";
import styled from "styled-components";
import photo from "../Assets/images/profile_v2.png";
import emailIcon from "../Assets/icons/brief_email.svg";
import mobileIcon from "../Assets/icons/brief_mobile.png";
import githubIcon from "../Assets/icons/brief_github.png";
import linkedinIcon from "../Assets/icons/brief_linkedin.svg";

const Brief = () => {
  return (
    <Container>
      {/* 사진 영역 */}
      <Photo>
        <img src={photo} alt="Profile" />
      </Photo>

      {/* 개인정보 영역 */}
      <Information>
        <Name>서반석</Name>
        <InfoWrap>
          <InfoKey>
            <img src={emailIcon} alt="email" />
          </InfoKey>
          <InfoValue>still3028@gmail.com</InfoValue>
        </InfoWrap>
        <InfoWrap>
          <InfoKey>
            <img src={mobileIcon} alt="mobile" />
          </InfoKey>
          <InfoValue>010-3967-3012</InfoValue>
        </InfoWrap>
        <InfoWrap>
          <InfoKey>
            <img src={githubIcon} alt="mobile" />
          </InfoKey>
          <InfoValue>
            <a
              href="https://github.com/BanseokSuh"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/BanseokSuh
            </a>
          </InfoValue>
        </InfoWrap>
        <InfoWrap>
          <InfoKey>
            <img src={linkedinIcon} alt="email" />
          </InfoKey>
          <InfoValue>
            <a
              href="https://www.linkedin.com/in/banseoksuh/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/banseoksuh
            </a>
          </InfoValue>
        </InfoWrap>
      </Information>
    </Container>
  );
};

export default Brief;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 4rem;
`;

const Photo = styled.div`
  width: 25%;
  min-height: 20rem;
  padding: 0 1.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Information = styled.div`
  width: 75%;
  padding: 0 1.5rem;
`;

const Name = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

const InfoWrap = styled.div`
  margin-top: 1.5rem;
  margin-left: 1rem;
`;

const InfoKey = styled.span`
  font-size: 1.5rem;

  img {
    width: 3%;
  }
`;

const InfoValue = styled.span`
  font-size: 1.4rem;
  margin-left: 2rem;
`;
