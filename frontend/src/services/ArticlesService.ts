import * as PredefinedArticlesService from "./PredefinedArticlesService";
import { Article, ArticleSummary } from "../types/Articles";
import { ApiArticle, ApiArticleSummary } from "../types/Api";
import { ApiRoutes, httpGet } from "./QueryService";
import { mapApiArticleComment } from "./CommentsService";

const mapApiArticle = (article: ApiArticle) => {
  return {
    id: article.id,
    title: article.title,
    imageUrl: article.imageUrl,
    sections: article.sections.map((s) => ({
      title: s.title,
      content: s.content,
    })),
    comments: article.comments?.map(mapApiArticleComment),
  };
};

const articlesCache: Map<string, Article[] | ArticleSummary[]> = new Map<
  string,
  Article[] | ArticleSummary[]
>();

const createCacheKey = (withComments: boolean, isFull: boolean) =>
  `${withComments},${isFull}`;

let isLoaded: boolean = false;

export const getIsLoaded = () => isLoaded;
export const setIsLoaded = (value: boolean) => (isLoaded = value);

export const getArticlesSummary = async (
  useCache: boolean
): Promise<ArticleSummary[]> => {
  if (useCache) {
    const cachedResult = articlesCache.get(createCacheKey(false, false));

    if (cachedResult) {
      return cachedResult as ArticleSummary[];
    }
  }

  const result = await httpGet<ApiArticleSummary[]>(ApiRoutes.Articles, {
    mode: "summary",
    withComments: false,
  });

  const predefinedResult = PredefinedArticlesService.getApiArticles();

  const mappedResult = [...result.data, ...predefinedResult].map((a) => ({
    id: a.id,
    title: a.title,
    imageUrl: a.imageUrl,
  }));

  articlesCache.set(createCacheKey(false, false), mappedResult);

  return mappedResult;
};

export const getArticles = async (
  withComments: boolean,
  useCache: boolean
): Promise<Article[]> => {
  if (useCache) {
    const cachedResult = articlesCache.get(createCacheKey(withComments, true));

    if (cachedResult) {
      return cachedResult as Article[];
    }
  }

  const result = await httpGet<ApiArticle[]>(ApiRoutes.Articles, {
    mode: "full",
    withComments,
  });

  const predefinedResult = PredefinedArticlesService.getApiArticles();

  const mappedResult = [...result.data, ...predefinedResult].map(mapApiArticle);

  articlesCache.set(createCacheKey(withComments, true), mappedResult);

  return mappedResult;
};

export const getArticle = async (
  articleId: string,
  withComments: boolean,
  useCache: boolean
): Promise<Article> => {
  if (useCache) {
    const cachedResult = articlesCache.get(createCacheKey(withComments, true));

    if (cachedResult) {
      const cachedArticle = cachedResult.find((a) => a.id === articleId);

      if (cachedArticle) {
        return cachedArticle as Article;
      }
    }
  }

  let result = PredefinedArticlesService.getApiArticleById(articleId);

  result ??= (
    await httpGet<ApiArticle[]>(ApiRoutes.Articles, {
      articleId,
      mode: "full",
      withComments,
    })
  ).data[0];

  return mapApiArticle(result);
};
