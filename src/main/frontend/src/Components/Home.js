// import Experience from "./Experience";

import Experience from "./Experience";

// import styled from "styled-components";

const Home = () => {
  return (
    <>
      <h1>제일 먼저 보이는 홈</h1>
      <br />
      <h1>사실상의 이력서</h1>
      <br />
      <h1>간단한 소개글</h1>
      <p>중요하게 생각하는 가치, 간단한 기술 스택, 관심사</p>

      <br />
      <h1>경력 나열</h1>
      <p>중요하게 생각하는 가치, 간단한 기술 스택, 관심사</p>

      <Experience>경력1</Experience>
      <Experience>경력2</Experience>
      <Experience>경력3</Experience>
      <Experience>경력4</Experience>
      <Experience>경력5</Experience>
    </>
  );
};

// const Experience = styled.div`
//   border: 1px dotted red;
// `;

export default Home;
