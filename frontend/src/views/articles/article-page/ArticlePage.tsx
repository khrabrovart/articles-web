import React from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useArticles from "../../../hooks/data/ArticlesDataHook";
import Page from "../../Page";
import ArticleComments from "./ArticleComments";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ArticleImage = styled.img`
  border-radius: 5px;
`;

const ContentContainer = styled.div`
  margin-top: 20px;
  padding: 0 200px;
`;

const ArticleSection = styled.div`
  margin-top: 30px;
`;

const ArticleSectionTitle = styled.h3`
  font-size: 18pt;
`;

const ArticleSectionContent = styled.p`
  line-height: 25px;
`;

const ArticleCommentsSeparator = styled.div`
  margin: 60px 0 20px 0;
  border-bottom: solid 1px #aaa;
`;

const ArticlePage = () => {
  const { articleId } = useParams();
  const articleIdParsed = (articleId && Number(articleId)) || undefined;

  if (articleIdParsed) {
    const [_, getArticleById] = useArticles();
    const article = getArticleById(articleIdParsed);

    if (article) {
      return (
        <Page title={article.title} subtitle={article.summary}>
          <Container>
            <ArticleImage src={article.imageUrl} />
            <ContentContainer>
              {article.sections.map((as) => (
                <ArticleSection key={as.title}>
                  <ArticleSectionTitle>{as.title}</ArticleSectionTitle>
                  <ArticleSectionContent>{as.content}</ArticleSectionContent>
                </ArticleSection>
              ))}
              <ArticleCommentsSeparator />
              <ArticleComments articleId={article.id} />
            </ContentContainer>
          </Container>
        </Page>
      );
    }
  }

  return <Navigate to="/404" replace />;
};

export default ArticlePage;
