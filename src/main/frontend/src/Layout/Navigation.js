// import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/posts">Posts</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">Projects</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #d1d8e4;

  background-color: orange;
  border: 1px dotted red;
`;

const NavList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  border: 1px dotted red;
`;

const NavItem = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  vertical-align: middle;
  font-size: 1.2rem;

  border: 1px dotted red;
`;
