import Experience from "./Experience/Experience";
import Brief from "./Brief";
import Introduce from "./Introduce";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      {/* 간략한 정보 영역 */}
      <Brief />
      {/* 소개 영역 */}
      <Introduce />
      {/* 경력사항 영역 */}
      <Experience />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0.1rem 0;
`;

export default About;
