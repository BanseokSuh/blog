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
      <Reset />
      <GlobalStyles />
      <Header />
      <Navigation />
      <Content>
        <Router />
      </Content>
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 65%;
  flex-flow: row wrap;

  border: 1px solid red;
`;

const Content = styled.div`
  width: 90%;
  min-height: 50rem;
  margin: 0 auto;

  border: 1px dotted red;
`;

export default App;
