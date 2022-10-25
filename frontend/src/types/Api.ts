export interface ApiResponse<T> {
  data: T;
}

export interface ApiArticleSummary {
  id: string;
  title: string;
  imageUrl: string;
}

export interface ApiArticle {
  id: string;
  title: string;
  imageUrl: string;
  sections: ApiArticleSection[];
}

export interface ApiArticleSection {
  title: string;
  content: string;
}

export interface ApiArticleComment {
  id: string;
  content: string;
  createdOn: string;
}
