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
  if (data) return data.map(({ urlItem }: Products) => `/store/${urlItem}`);
};

// export const getProductById = async (id: string | number) => {
//   try {
//     // const { data } = await axios.get(
//     //   `${process.env.HOST}/api/product?id=${id}`
//     // );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getProductBySlug = async (url: string) => {
  try {
    const data = await getProducts();
    if (data) return data.find(({ urlItem }: Products) => urlItem === url);
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCategory = async (category: string) => {
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
