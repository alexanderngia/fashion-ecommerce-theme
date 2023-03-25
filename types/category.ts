export interface CategoryData {
  title: string;
  descript: string;
  card: CatCard[];
}
export interface CatCard {
  [x: string]: any;
  img: string;
  title: string;
  link: string;
}
