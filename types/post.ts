export interface Post {
  [x: string]: any;
  id?: number;
  author: string;
  url: string;
  title: string;
  body: string;
  bodyHtml: string;
  featureImg: string;
  category: string;
  keywordTag: string;
  titleTag: string;
  descripTag: string;
}
