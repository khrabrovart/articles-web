import React from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useArticles from "../../../hooks/data/ArticlesDataHook";
import Page from "../../Page";
import ArticleComments from "./ArticleComments";
import ImagePlaceholder from "../../../components/utils/ImagePlaceholder";

const Container = styled.div`
  padding: 0 200px;
  display: flex;
  flex-flow: column nowrap;
`;

const ArticleTitle = styled.h1`
  margin: 0;
  font-size: 25pt;
  font-weight: 600;
`;

const ArticleImage = styled(ImagePlaceholder)`
  margin: 40px 0;
  border-radius: 2px;
  height: 500px;
  object-fit: cover;
`;

const ArticleSection = styled.div`
  margin-bottom: 20px;
`;

const ArticleSectionTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 18pt;
`;

const ArticleSectionContent = styled.p`
  line-height: 27px;
`;

const ArticleCommentsSeparator = styled.div`
  margin: 40px 0;
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
        <Page>
          <Container>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleImage src={article.imageUrl} />
            {article.sections.map((as) => (
              <ArticleSection key={as.title}>
                <ArticleSectionTitle>{as.title}</ArticleSectionTitle>
                <ArticleSectionContent>{as.content}</ArticleSectionContent>
              </ArticleSection>
            ))}
            <ArticleCommentsSeparator />
            <ArticleComments articleId={article.id} />
          </Container>
        </Page>
      );
    }
  }

  return <Navigate to="/404" replace />;
};

export default ArticlePage;
