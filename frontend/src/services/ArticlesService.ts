import { Article, ArticleSummary } from "../types/Articles";
import { ApiArticle, ApiArticleSummary } from "../types/Api";
import { ApiRoutes, httpGet } from "./QueryService";

const mapApiArticle = (article: ApiArticle) => {
  return {
    id: article.id,
    title: article.title,
    imageUrl: article.imageUrl,
    sections: article.sections.map((s) => ({
      title: s.title,
      content: s.content,
    })),
  };
};

const articlesCache: Map<string, Article[] | ArticleSummary[]> = new Map<
  string,
  Article[] | ArticleSummary[]
>();

const createCacheKey = (isFull: boolean) => `${isFull}`;

let isLoaded: boolean = false;

export const getIsLoaded = () => isLoaded;
export const setIsLoaded = (value: boolean) => (isLoaded = value);

export const getArticlesSummary = async (
  useCache: boolean
): Promise<ArticleSummary[]> => {
  if (useCache) {
    const cachedResult = articlesCache.get(createCacheKey(false));

    if (cachedResult) {
      return cachedResult as ArticleSummary[];
    }
  }

  const result = await httpGet<ApiArticleSummary[]>(ApiRoutes.Articles, {
    mode: "summary",
  });

  const mappedResult = result.data.map((a) => ({
    id: a.id,
    title: a.title,
    imageUrl: a.imageUrl,
  }));

  articlesCache.set(createCacheKey(false), mappedResult);

  return mappedResult;
};

export const getArticles = async (useCache: boolean): Promise<Article[]> => {
  if (useCache) {
    const cachedResult = articlesCache.get(createCacheKey(true));

    if (cachedResult) {
      return cachedResult as Article[];
    }
  }

  const result = await httpGet<ApiArticle[]>(ApiRoutes.Articles, {
    mode: "full",
  });

  const mappedResult = result.data.map(mapApiArticle);

  articlesCache.set(createCacheKey(true), mappedResult);

  return mappedResult;
};

export const getArticle = async (
  articleId: string,
  useCache: boolean
): Promise<Article> => {
  if (useCache) {
    const cachedResult = articlesCache.get(createCacheKey(true));

    if (cachedResult) {
      const cachedArticle = cachedResult.find((a) => a.id === articleId);

      if (cachedArticle) {
        return cachedArticle as Article;
      }
    }
  }

  const result = await httpGet<ApiArticle[]>(ApiRoutes.Articles, {
    articleId,
    mode: "full",
  });

  return mapApiArticle(result.data[0]);
};
