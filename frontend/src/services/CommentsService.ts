import { ArticleComment } from "../types/Articles";
import { ApiArticleComment } from "../types/Api";
import { httpGet } from "./QueryService";

export const getArticleComments = async (
  articleId: number
): Promise<ArticleComment[]> => {
  const result = await httpGet<ApiArticleComment[]>("comments");

  return result.data.map((c) => ({
    id: c.id,
    articleId: c.articleId,
    date: new Date(c.date),
    content: c.content,
    author: c.author,
  }));
};
