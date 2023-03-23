import axios from "axios";
export const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsId = async () => {
  const products = await getProducts();

  // return posts.map((post) => ({
  //   params: {
  //     id: `${post.id}`,
  //   },
  // }));
  return products.map((product) => `/products/${product.id}`);
};

export const getProductsById = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
