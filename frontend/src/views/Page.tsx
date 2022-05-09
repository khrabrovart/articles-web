import React from "react";
import styled from "styled-components";

interface Props {
  label?: string;
  children: React.ReactNode;
}

const Container = styled.section`
  margin: 100px auto;
  max-width: 1100px;
  padding: 0 20px;
`;

const PageLabel = styled.h1`
  font-size: 25pt;
  font-weight: bold;
`;

const PageContent = styled.div`
  margin-top: 50px;
`;

const Page = (props: Props) => {
  return (
    <Container>
      <PageLabel>{props.label}</PageLabel>
      <PageContent>{props.children}</PageContent>
    </Container>
  );
};

export default Page;
