import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 50px;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-start;
  align-items: center;
  background: #222;
`;

const Content = styled.div`
  font-size: 10pt;
  margin: 0 0 0 20px;
  color: #fff;
`;

const Footer = () => {
  return (
    <Container>
      <Content>&copy; All rights reserved 2022</Content>
    </Container>
  );
};

export default Footer;
