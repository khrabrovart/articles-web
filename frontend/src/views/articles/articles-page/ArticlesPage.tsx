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
  border-radius: 2px;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.imageUrl});
  background-position: center top;
  background-size: cover;
  box-shadow: 3px 3px 5px #aaa;
  cursor: pointer;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
      url(${(props) => props.imageUrl});
    background-position: center top;
    background-size: cover;
  }
`;

const ArticlePanelTitle = styled.div`
  font-size: 18pt;
  font-weight: bold;
`;

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [articles, _] = useArticles();

  return (
    <Page>
      <Container>
        {articles.map((article) => (
          <ArticlePanel
            key={article.id}
            imageUrl={article.imageUrl}
            onClick={() => navigate(article.id.toString())}
          >
            <ArticlePanelTitle>{article.title}</ArticlePanelTitle>
          </ArticlePanel>
        ))}
      </Container>
    </Page>
  );
};

export default ArticlesPage;
