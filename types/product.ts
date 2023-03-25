export interface Products {
  [x: string]: any;
  id: number;
  idItem: string;
  imgItem: string;
  urlItem: string;
  nameItem: string;
  bodyItem: string;
  bodyHtmlItem: string;
  qualityItem: number;
  colorItem: string;
  sizeItem: string;
  priceItem: number;
  categoryItem?: string;
  keywordTagItem?: string;
  titleTagItem?: string;
  descripTagItem?: string;
  authorItem?: string;
}
