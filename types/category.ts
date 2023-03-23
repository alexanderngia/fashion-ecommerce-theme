export interface CategoryData {
  title: string;
  descript: string;
  card: {
    [x: string]: any;
    img: string;
    title: string;
    link: string;
  };
}
