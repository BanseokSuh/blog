import React from "react";
import styled from "styled-components";
import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";
import { Reset } from "styled-reset";

const App = () => {
  return (
    <Layout>
      <Reset />
      <Header />
      <Navigation />
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;

  border: 1px dotted red;
`;

export default App;
