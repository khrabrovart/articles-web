import * as ArticlesService from "../../../services/ArticlesService";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArticleSummary } from "../../../types/Articles";
import Page from "../../Page";
import { preloadData } from "../../../services/PreloadingService";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
`;

const ArticlePanel = styled.div<{ imageUrl: string }>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  padding: 20px;
  height: 330px;
  width: 290px;
  border-radius: 2px;
  color: #fff;
  background: url(${(props) => props.imageUrl});
  background-position: center top;
  background-size: cover;
  box-shadow: 0 0 5px #aaa;
  text-shadow: 0 0 2px #000;
  cursor: pointer;

  top: 0;
  position: relative;
  transition: top ease-in 0.15s, box-shadow ease-in 0.15s;

  &:hover {
    box-shadow: 0 5px 10px #aaa;
    top: -5px;
  }
`;

const ArticlePanelTitle = styled.div`
  font-size: 18pt;
  font-weight: 600;
`;

const ArticlePanelMetadata = styled.div`
  font-size: 10pt;
  font-weight: 500;
`;

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<ArticleSummary[]>([]);

  useEffect(() => {
    const loadArticles = async () => {
      const articlesSummary = await ArticlesService.getArticlesSummary(true);
      setArticles(articlesSummary);
    };
    loadArticles();
  }, []);

  useEffect(() => {
    preloadData(false);
  }, []);

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
            <ArticlePanelMetadata>Test Name</ArticlePanelMetadata>
          </ArticlePanel>
        ))}
      </Container>
    </Page>
  );
};

export default ArticlesPage;
