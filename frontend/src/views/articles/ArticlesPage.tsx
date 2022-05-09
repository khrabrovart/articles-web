import React from "react";
import styled from "styled-components";
import Page from "../Page";

const articles = [
  {
    id: 1,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl: "https://i.ytimg.com/vi/DxGLn_Cu5l0/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
  },
  {
    id: 3,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
  },
  {
    id: 4,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
  },
  {
    id: 5,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
  },
  {
    id: 6,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
  },
];

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
`;

const Article = styled.div<{ image?: string }>`
  padding: 20px;
  height: 330px;
  width: 290px;
  border: solid 1px #4a4a4a;
  border-radius: 5px;
  background-image: url(${(props) => props.image});
`;

const ArticleTitle = styled.div`
  font-size: 18pt;
  font-weight: bold;
`;

const ArticleSummary = styled.div`
  font-size: 14pt;
`;

const ArticlesPage = () => {
  return (
    <Page label="Articles">
      <Container>
        {articles.map((article) => (
          <Article key={article.id} image={article.imageUrl}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleSummary>{article.summary}</ArticleSummary>
          </Article>
        ))}
      </Container>
    </Page>
  );
};

export default ArticlesPage;
