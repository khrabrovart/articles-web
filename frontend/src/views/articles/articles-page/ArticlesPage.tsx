import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useArticles from "../../../hooks/data/ArticlesDataHook";
import Page from "../../Page";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
`;

const ArticlePanel = styled.div<{ imageUrl: string }>`
  padding: 20px;
  height: 330px;
  width: 290px;
  border-radius: 5px;
  color: #fdfdfd;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.imageUrl});
  background-position: center top;
  background-size: cover;
  box-shadow: 3px 3px 8px #aaa;
  cursor: pointer;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
      url(${(props) => props.imageUrl});
    background-position: center top;
    background-size: cover;
  }
`;

const ArticlePanelTitle = styled.div`
  font-size: 18pt;
  font-weight: bold;
`;

const ArticlePanelSummary = styled.div`
  margin-top: 10px;
  font-size: 14pt;
`;

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [articles, _] = useArticles();

  return (
    <Page title="Articles">
      <Container>
        {articles.map((article) => (
          <ArticlePanel
            key={article.id}
            imageUrl={article.imageUrl}
            onClick={() => navigate(article.id.toString())}
          >
            <ArticlePanelTitle>{article.title}</ArticlePanelTitle>
            <ArticlePanelSummary>{article.summary}</ArticlePanelSummary>
          </ArticlePanel>
        ))}
      </Container>
    </Page>
  );
};

export default ArticlesPage;
