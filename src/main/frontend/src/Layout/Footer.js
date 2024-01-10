import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h1>푸터 컨테이너</h1>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 8rem;

  background-color: grey;
  border: 1px dotted red;
`;
