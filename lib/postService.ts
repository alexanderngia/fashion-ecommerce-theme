import axios from "axios";
import { Post } from "types/post";
import { data } from "pages/data/post";
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
  return posts.map(({ url }: Post) => `/blog/${url}`);
};

export const getPostById = async (id: string | number) => {
  try {
    const { data } = await axios.get(`${process.env.HOST}/api/post?id=${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPostBySlug = async (urlPath: string) => {
  try {
    const posts = await getPosts();
    const postId = posts.find(({ url }: Post) => url === urlPath);
    return postId;
  } catch (error) {
    console.log(error);
  }
};

export const getPostByCategory = async (cat: string) => {
  try {
    const posts = await getPosts();
    const postCat = posts.filter(({ category }: Post) => category === cat);
    return postCat;
  } catch (error) {
    console.log(error);
  }
};
