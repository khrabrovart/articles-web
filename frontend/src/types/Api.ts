export interface ApiArticleComment {
  id: number;
  articleId: number;
  date: string;
  content: string;
  author: {
    userId: number;
    userImageId: number;
    userName: string;
    fullName?: string;
  };
}
