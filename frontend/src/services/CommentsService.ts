import { ApiRoutes, httpPost } from "./QueryService";

interface CreateCommentRequest {
  articleId: string;
  content: string;
}

export const createComment = async (
  articleId: string,
  content: string
): Promise<void> => {
  await httpPost<CreateCommentRequest>(ApiRoutes.Comments, {
    articleId,
    content,
  });
};
