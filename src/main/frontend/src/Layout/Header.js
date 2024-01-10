import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      {/* <Link to={"/"}> */}
      <Element>
        <ShortCut>
          <Link to="/login">로그인/회원가입</Link>
        </ShortCut>
      </Element>
      {/* </Link> */}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;

  background-color: blue;
  border: 1px dotted red;
`;

const Element = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 10rem;
  display: flex;
  flex-flow: row wrap;

  background-color: green;
  border: 1px dotted red;
`;

const ShortCut = styled.div`
  order: 1;
  width: 100%;
  height: 20px;
  text-align: right;

  border: 1px dotted red;
`;
