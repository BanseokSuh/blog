import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../Layout/Navigation";

const Header = () => {
  return (
    <ContainerWrap>
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
            <Link to="/">
              <MainButtonName>Banny's</MainButtonName> Blog
            </Link>
          </MainButton>
          <Navigation />
          {/* <StickyNavigation>
            <Navigation />
          </StickyNavigation> */}
        </HeaderContainer>
      </Container>
    </ContainerWrap>
  );
};

export default Header;

const ContainerWrap = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px dotted grey;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  width: 55%;

  margin: 0 auto;
`;

const ShortCut = styled.div`
  text-align: right;
  padding: 0.8rem 0;
  font-size: 14px;
`;

const HeaderContainer = styled.div``;

const StickyNavigation = styled(Navigation)`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const MainButton = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  color: black;
  margin-bottom: 1rem;
`;

const MainButtonName = styled.span`
  font-weight: bold;
  color: #d94844;
`;
