import axios from "axios";
import { Product } from "types/product";
import { data } from "../pages/data/product";
export const getProducts = async () => {
  // const { data } = await axios.get(`${process.env.HOST}/api/product`);
  try {
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductPath = async () => {
  const product = await getProducts();
  return product.map(({ urlItem }: Product) => `/store/${urlItem}`);
};

export const getProductById = async (id: string | number) => {
  try {
    // const { data } = await axios.get(
    //   `${process.env.HOST}/api/product?id=${id}`
    // );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductBySlug = async (url: string) => {
  try {
    const data = await getProducts();
    const productId = data.find(({ urlItem }: Product) => urlItem === url);
    return productId;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCategory = async (category: string) => {
  try {
    const data = await getProducts();
    const productCat = data.filter(
      ({ categoryItem }: Product) => categoryItem === category
    );
    return productCat;
  } catch (error) {
    console.log(error);
  }
};
