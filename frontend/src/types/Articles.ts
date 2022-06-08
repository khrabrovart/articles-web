export interface Article {
  id: number;
  title: string;
  sections: ArticleSection[];
  imageUrl: string;
  author: {
    userId: number;
    userImageId: number;
    userName: string;
    fullName?: string;
  };
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleComment {
  id: number;
  articleId: number;
  date: Date;
  content: string;
  author: {
    userId: number;
    userImageId: number;
    userName: string;
    fullName?: string;
  };
}
