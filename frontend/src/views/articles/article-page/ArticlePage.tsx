import * as ArticlesService from "../../../services/ArticlesService";
import * as CommentsService from "../../../services/CommentsService";
import * as ImagesService from "../../../services/ImagesService";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Article, ArticleComment } from "../../../types/Articles";
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
  const [comments, setComments] = useState<ArticleComment[]>();
  const { articleId } = useParams();

  if (!articleId) {
    return <Navigate to="/404" replace />;
  }

  useEffect(() => {
    const loadArticle = async () => {
      const article = await ArticlesService.getArticle(articleId!, false, true);

      if (!article) {
        return <Navigate to="/404" replace />;
      }

      setArticle(article);
    };
    loadArticle();
  }, []);

  useEffect(() => {
    const loadComments = async () => {
      const comments = await CommentsService.getComments(articleId);
      setComments(comments);
    };
    loadComments();
  }, []);

  useEffect(() => {
    const warmCache = async () => {
      if (!ArticlesService.getIsLoaded()) {
        const articlesSummary = await ArticlesService.getArticlesSummary(true);
        await ArticlesService.getArticles(false, true);
        ImagesService.preloadImages(articlesSummary.map((a) => a.imageUrl));
        ArticlesService.setIsLoaded(true);
      }
    };

    warmCache();
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
          <ArticleComments articleId={article.id} comments={comments ?? []} />
        </Container>
      )}
    </Page>
  );
};

export default ArticlePage;
