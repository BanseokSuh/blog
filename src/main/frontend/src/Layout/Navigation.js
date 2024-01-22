// import { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../Styles/Navigation.css";

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/category/about" exact="true" activeclassname="active">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/category/post" activeclassname="active">
            Post
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/category/project" activeclassname="active">
            Project
          </NavLink>
        </NavItem> */}
        {/* <NavItem>
          <NavLink to="/category/resume">Resume</NavLink>
        </NavItem> */}
      </NavList>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.6rem;
`;

const NavList = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  margin-right: 3rem;
  font-size: 1.3rem;
`;
