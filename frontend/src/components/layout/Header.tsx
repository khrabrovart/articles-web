import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  background: #222;
  padding: 0 30px;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const TitleBlock = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 2px;
  font-size: 30pt;
  text-decoration: none;
  color: #fff;
`;

const TitleLeft = styled.div`
  font-weight: 600;
`;

const TitleRight = styled.div`
  font-weight: 100;
`;

const RightBlock = styled.div`
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
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const VerticalSeparator = styled.div`
  height: 40px;
  margin: 0 30px;
  border-left: solid 1px #fff;
`;

const Button = styled(NavItem)`
  padding: 5px 35px;
  border: solid 1px #fff;
  border-radius: 2px;
  white-space: nowrap;
`;

const Header = () => {
  return (
    <Container>
      <TitleBlock to="/">
        <TitleLeft>Articles</TitleLeft>
        <TitleRight>Website</TitleRight>
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
