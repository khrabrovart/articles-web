export interface ApiArticleComment {
  id: string;
  articleId: string;
  date: string;
  content: string;
  author: {
    userId: number;
    userImageId: number;
    userName: string;
    fullName?: string;
  };
}
