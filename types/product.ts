export interface Product {
  [x: string]: any;
  length: any;
  map(
    arg0: (item: any) => JSX.Element
  ): import("react").ReactNode | import("react").ReactNode[];
  id?: number;
  idItem?: string;
  imgItem: string;
  urlItem: string;
  nameItem?: string;
  bodyItem?: string;
  bodyHtmlItem: string;
  qualityItem?: number;
  colorItem?: string;
  sizeItem?: string;
  priceItem?: number;
  categoryItem?: string;
  keywordTagItem?: string;
  titleTagItem?: string;
  descripTagItem?: string;
  authorItem?: string;
}
