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

const TitleBlock = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  margin-left: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #145eab;
`;

const TitleTop = styled.div`
  font-size: 30pt;
  height: 40px;
`;

const TitleBottom = styled.div`
  font-size: 8pt;
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
    opacity: 0.7;
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
`;

const Header = () => {
  return (
    <Container>
      <TitleBlock to="/">
        <TitleTop>Articles!</TitleTop>
        <TitleBottom>Read it here. Please...</TitleBottom>
      </TitleBlock>
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
