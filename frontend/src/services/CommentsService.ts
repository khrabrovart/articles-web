import { ArticleComment } from "../types/Articles";
import { ApiArticleComment } from "../types/Api";
import { httpGet } from "./QueryService";

export const getArticleComments = async (
  articleId: number
): Promise<ArticleComment[]> => {
  const result = await httpGet<ApiArticleComment[]>("comments");
  return result.data as ArticleComment[];
};
