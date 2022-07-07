export interface Article {
  id: string;
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
  id: string;
  articleId: string;
  date: Date;
  content: string;
  author: {
    userId: number;
    userImageId: number;
    userName: string;
    fullName?: string;
  };
}
