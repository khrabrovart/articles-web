import { ArticleComment } from "../types/Articles";
import { Comment } from "../types/Server";
import { httpGet } from "./QueryService";

export const getArticleComments = async (
  articleId: number
): Promise<ArticleComment[]> => {
  const apiComments = await httpGet<Comment[]>("comments");

  let i = 0;
  return apiComments.map((c: Comment) => ({
    id: i++,
    articleId,
    date: c.date,
    content: c.content,
    user: {
      name: "test_user",
      fullName: "Test User API",
    },
  }));
};
