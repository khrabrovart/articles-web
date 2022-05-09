import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Link)`
  font-size: 30pt;
  margin-left: 30px;
  font-weight: 800;
  text-decoration: none;
  color: #145eab;
`;

const RightBlock = styled.div`
  margin: 5px 30px 0 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Nav = styled.nav`
  width: 400px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: #4a4a4a;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;

const VerticalSeparator = styled.div`
  height: 40px;
  margin: 0 30px;
  border-left: solid 1px #aaa;
`;

const Button = styled(NavItem)`
  padding: 5px 35px;
  border: solid 2px #4a4a4a;
  border-radius: 5px;

  &:hover {
    border: solid 2px #aaa;
  }
`;

const Header = () => {
  return (
    <Container>
      <Title to="/">Articles!</Title>
      <RightBlock>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/news">News</NavItem>
          <NavItem to="/articles">Articles</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/404">Not found</NavItem>
        </Nav>
        <VerticalSeparator />
        <Button to="/sign-in">Sign In</Button>
      </RightBlock>
    </Container>
  );
};

export default Header;
