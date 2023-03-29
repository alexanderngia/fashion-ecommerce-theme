import axios from "axios";
import { Post } from "types/post";
import { data } from "data/post";
export const getPosts = async () => {
  try {
    // const { data } = await axios.get(`${process.env.HOST}/api/post`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostPath = async () => {
  const posts = await getPosts();
  try {
    if (posts) return posts.map(({ url }: Post) => `/blog/${url}`);
  } catch (error) {
    console.log(error);
  }
};

// export const getPostById = async (id: string | number) => {
//   try {
//     const { data } = await axios.get(`${process.env.HOST}/api/post?id=${id}`);

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getPostBySlug = async (urlPath: string) => {
  try {
    const posts = await getPosts();
    if (posts) return posts.find(({ url }: Post) => url === urlPath);
  } catch (error) {
    console.log(error);
  }
};

export const getPostByCategory = async (cat: string) => {
  try {
    const posts = await getPosts();
    if (posts) return posts.filter(({ category }: Post) => category === cat);
  } catch (error) {
    console.log(error);
  }
};
