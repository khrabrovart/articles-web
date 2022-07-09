import * as ArticlesService from "../../../services/ArticlesService";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useArticles from "../../../hooks/data/ArticlesDataHook";
import { Article } from "../../../types/Articles";
import Page from "../../Page";
import ArticleComments from "./ArticleComments";

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

const ArticleImage = styled.img`
  margin: 40px 0px;
  border-radius: 2px;
  height: 500px;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
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
  const [article, setArticle] = useState<Article>();
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [_, getArticleById] = useArticles();

  useEffect(() => {
    if (!articleId) {
      navigate("/404");
    }

    const loadArticle = async () => {
      let article = getArticleById(articleId!);
      article ??= await ArticlesService.getArticle(articleId!);

      if (!article) {
        navigate("/404");
      }

      setArticle(article);
    };
    loadArticle();
  }, []);

  return (
    <Page>
      {article && (
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
          <ArticleComments articleId={article.id} comments={article.comments} />
        </Container>
      )}
    </Page>
  );
};

export default ArticlePage;
