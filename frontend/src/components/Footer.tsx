import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 50px;
  width: 100%;

  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-start;
  align-items: center;

  background: #4a4a4a;
`;

const Content = styled.div`
  margin: 0 0 0 20px;
  color: #fdfdfd;
`;

const Footer = () => {
  return (
    <Container>
      <Content>© All rights reserved 2022</Content>
    </Container>
  );
};

export default Footer;
