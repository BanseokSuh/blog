import React from "react";
import styled from "styled-components";
import Header from "./Layout/Header";

import { Reset } from "styled-reset";
import Router from "./Routes/Router";
import Footer from "./Layout/Footer";
import GlobalStyles from "./Styles/GlobalStyles";

const App = () => {
  return (
    <Layout>
      {/* 스타일링 리셋 */}
      <Reset />
      {/* 전역 스타일링 */}
      <GlobalStyles />

      {/* 헤더 */}
      <Header />

      {/* 내용 */}
      <Content>
        <Container>
          <Router />
        </Container>
      </Content>

      {/* 푸터 */}
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const Content = styled.div`
  width: 100%;
  min-height: 50rem;
  margin: 0 auto;
  padding: 1rem;

  border-top: 1px dotted grey;
`;

const Container = styled.div`
  width: 55%;
  margin: 0 auto;
  margin-top: 1rem;
  border: 1px dotted red;
`;

export default App;
