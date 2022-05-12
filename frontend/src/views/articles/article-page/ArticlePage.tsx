import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Page from "../../Page";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ArticlePage = () => {
  const { articleId } = useParams();

  return (
    <Page label={`Article: ${articleId}`}>
      <Container>This is the Article page!</Container>
    </Page>
  );
};

export default ArticlePage;
