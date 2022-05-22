export interface Article {
  id: number;
  title: string;
  summary: string;
  sections: ArticleSection[];
  imageUrl: string;
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
  user: {
    name: string;
    imageUrl?: string;
    fullName?: string;
  };
}
