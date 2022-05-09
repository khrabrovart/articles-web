import React from "react";
import styled from "styled-components";

const Container = styled.header`
  height: 100px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40pt;
  margin-left: 30px;
  font-weight: 800;
  color: #145eab;
`;

const Nav = styled.nav`
  width: 400px;
  margin-right: 100px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.div`
  color: #4a4a4a;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;

const Header = () => {
  return (
    <Container>
      <Title>Articles!</Title>
      <Nav>
        <NavItem>News</NavItem>
        <NavItem>Articles</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Not found</NavItem>
      </Nav>
    </Container>
  );
};

export default Header;
