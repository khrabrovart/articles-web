import { Article, ArticleSummary } from "../types/Articles";
import { ApiArticle, ApiArticleSummary } from "../types/Api";
import { ApiRoutes, httpGet } from "./QueryService";

export const getArticles = async (): Promise<ArticleSummary[]> => {
  const result = await httpGet<ApiArticleSummary[]>(ApiRoutes.Articles);
  return result.data.map((a) => ({
    id: a.id,
    title: a.title,
    imageUrl: a.imageUrl,
  }));
};

export const getArticle = async (articleId: string): Promise<Article> => {
  const result = await httpGet<ApiArticle>(ApiRoutes.Articles, { articleId });
  const article = result.data;

  return {
    id: article.id,
    title: article.title,
    imageUrl: article.imageUrl,
    sections: article.sections.map((s) => ({
      title: s.title,
      content: s.content,
    })),
    comments: article.comments.map((c) => ({
      id: c.id,
      content: c.content,
      createdOn: new Date(c.createdOn),
      author: {
        userName: "api_user",
        fullName: "API User",
      },
    })),
  };
};
