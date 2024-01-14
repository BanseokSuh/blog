import React from "react";
import styled from "styled-components";
import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";
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
      <Header />
      <Navigation />

      <Content>
        <Container>
          <Router />
        </Container>
      </Content>
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

  // border: 1px dotted red;
  border-top: 1px dotted red;
  border-bottom: 1px dotted red;
`;

const Container = styled.div`
  width: 100%;
  border: 1px dotted red;
`;

export default App;
