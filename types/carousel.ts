import { Product } from "./product";

export interface CarouselData {
  [x: string]: any;
  img: string;
}
export interface CarouselProductData extends Product {}
