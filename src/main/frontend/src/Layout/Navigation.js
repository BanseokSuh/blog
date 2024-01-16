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
          <Link to="/category/post">Post</Link>
        </NavItem>
        <NavItem>
          <Link to="/category/project">Project</Link>
        </NavItem>
        {/* <NavItem>
          <Link to="/category/resume">Resume</Link>
        </NavItem> */}
      </NavList>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavList = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  margin-right: 3rem;
  font-size: 1.3rem;
`;
