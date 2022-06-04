import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.section`
  margin: 100px auto;
  max-width: 1100px;
  padding: 0 20px;
`;

const PageContent = styled.div`
  margin-top: 50px;
`;

const Page = (props: Props) => {
  return (
    <Container>
      <PageContent>{props.children}</PageContent>
    </Container>
  );
};

export default Page;
