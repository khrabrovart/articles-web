import { ApiArticleComment } from "../types/Api";
import { ArticleComment } from "../types/Articles";
import { ApiRoutes, httpGet, httpPost } from "./QueryService";

interface CreateCommentRequest {
  articleId: string;
  content: string;
}

export const mapApiArticleComment = (comment: ApiArticleComment) => ({
  id: comment.id,
  content: comment.content,
  createdOn: new Date(comment.createdOn),
  author: {
    userName: "api_user",
    fullName: "API User",
  },
});

export const createComment = async (
  articleId: string,
  content: string
): Promise<ArticleComment> => {
  const result = await httpPost<CreateCommentRequest, ApiArticleComment>(
    ApiRoutes.Comments,
    {
      articleId,
      content,
    }
  );

  return mapApiArticleComment(result.data);
};

export const getComments = async (
  articleId: string
): Promise<ArticleComment[]> => {
  const result = await httpGet<ApiArticleComment[]>(ApiRoutes.Comments, {
    articleId,
  });

  return result.data.map(mapApiArticleComment);
};
