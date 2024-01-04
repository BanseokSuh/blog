import { Component } from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>소개</NavItem>
        <NavItem>글</NavItem>
        <NavItem>연락</NavItem>
        <NavItem>메뉴1</NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #d1d8e4;

  border: 1px dotted red;
`;

const NavList = styled.div`
  width: 1000px;
  display: flex;
  margin: 0 auto;

  border: 1px dotted red;
`;

const NavItem = styled.div`
  width: 60px;
  margin-left: 18px;
  margin-top: 5px;
  display: flex;

  border: 1px dotted red;
`;
