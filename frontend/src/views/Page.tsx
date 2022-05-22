import React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Container = styled.section`
  margin: 100px auto;
  max-width: 1100px;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 25pt;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PageSubtitle = styled.h2`
  margin-top: 10px;
`;

const PageContent = styled.div`
  margin-top: 50px;
`;

const Page = (props: Props) => {
  return (
    <Container>
      {props.title && <PageTitle>{props.title}</PageTitle>}
      {props.subtitle && <PageSubtitle>{props.subtitle}</PageSubtitle>}
      <PageContent>{props.children}</PageContent>
    </Container>
  );
};

export default Page;
