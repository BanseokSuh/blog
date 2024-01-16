import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../Layout/Navigation";

const Header = () => {
  return (
    <Container>
      {/* 로그인/회원가입 영역 */}
      <div>
        <ShortCut>
          <Link to="/login">로그인/회원가입</Link>
        </ShortCut>
      </div>

      {/* 헤더 영역 */}
      <HeaderContainer>
        <MainButton>
          <Link to="/">Banny's Blog</Link>
        </MainButton>
        <Navigation />
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 60%;
  margin: 0 auto;

  // border: 1px dotted red;
`;

const ShortCut = styled.div`
  height: 2rem;
  text-align: right;
  padding-top: 0.8rem;
  font-size: 14px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainButton = styled.div`
  width: 30%;
  height: 3.5rem;
  font-size: 2rem;
  color: black;
`;
