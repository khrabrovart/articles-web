export interface ArticleSummary {
  id: string;
  title: string;
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  imageUrl: string;
  sections: ArticleSection[];
  comments: ArticleComment[];
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleComment {
  id: string;
  content: string;
  createdOn: Date;
  author: ArticleCommentAuthor;
}

export interface ArticleCommentAuthor {
  userName: string;
  fullName: string;
}
