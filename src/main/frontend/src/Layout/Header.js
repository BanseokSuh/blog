import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      {/* <Link to={"/"}> */}
      <ShortCut>
        <Link to="/login">로그인/회원가입</Link>
      </ShortCut>
      <Element>
        <Link to="/">Banny's Blog</Link>
      </Element>
      {/* </Link> */}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;

  // background-color: blue;
  // border: 1px dotted red;
  border: 1px dotted red;
`;

const Element = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-flow: row wrap;
  font-size: 2rem;
  color: black;
  padding-top: 1rem;

  // background-color: green;
  // border: 1px dotted red;
  // border-top: 1px dotted red;
`;

const ShortCut = styled.div`
  order: 1;
  width: 100%;
  height: 20px;
  text-align: right;
  padding-top: 1rem;

  // border: 1px dotted red;
`;
