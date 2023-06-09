// import axios from "axios";
import { Products } from "types/product";
import { data } from "../data/product";
export const getProducts = async () => {
  // const { data } = await axios.get(`${process.env.HOST}/api/product`);
  try {
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductPath = async () => {
  const data = await getProducts();
  if (data)
    return data.map(
      ({ urlItem, categoryItem }: Products) =>
        `/store/${categoryItem}/${urlItem}`
    );
};

export const getProductBySlug = async (url: string) => {
  try {
    const data = await getProducts();
    if (data)
      return data.find(
        ({ urlItem, categoryItem }: Products) =>
          `/store/${categoryItem}/${urlItem}` === url
      );
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCate = async (category: string) => {
  try {
    const data = await getProducts();
    if (data)
      return data.filter(
        ({ categoryItem }: Products) => categoryItem === category
      );
  } catch (error) {
    console.log(error);
  }
};

export const getCatePath = async () => {
  const data = await getProducts();
  if (data)
    return data.map(({ categoryItem }: Products) => `/store/${categoryItem}`);
};
