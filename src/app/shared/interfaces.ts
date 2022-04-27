export interface IArticle {
  id: string;
  journal: string;
  eissn?: string;
  publicationDate?: string;
  articleType?: string;
  authorDisplay?: string[];
  abstract: string[];
  titleDisplay: string;
  score?: number;
}

export interface IArticleEdit {
  titleDisplay: string;
  journal: string;
  abstract: string;
}

export interface IArticlePlos {
  id: string;
  journal: string;
  eissn: string;
  publication_date: string;
  article_type: string;
  author_display: string[];
  abstract: string[];
  title_display: string;
  score: number;
}
