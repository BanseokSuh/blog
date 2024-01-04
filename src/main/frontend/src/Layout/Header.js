import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Element>
        <ShortCut>로그인/회원가입</ShortCut>
      </Element>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;

  border: 1px dotted red;
`;

const Element = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100px;
  display: flex;
  flex-flow: row wrap;

  border: 1px dotted red;
`;

const ShortCut = styled.div`
  order: 1;
  width: 100%;
  height: 20px;
  text-align: right;

  border: 1px dotted red;
`;
