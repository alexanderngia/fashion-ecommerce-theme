import axios from "axios";
import { Product } from "types/product";

export const getProducts = async () => {
  const { data } = await axios.get(process.env.DOMAIN_BACKEND + "/api/product");
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
    const { data } = await axios.get(
      process.env.DOMAIN_BACKEND + "/api/product?id=" + `${id}`
    );
    console.log(data, "data");

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
