import axios from "axios";

export const getHomeData = async () => {
  try {
    const { data } = await axios.get(`${process.env.HOST}/api/home`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getStoreData = async () => {
  try {
    const { data } = await axios.get(`${process.env.HOST}/api/store`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBlogData = async () => {
  const { data } = await axios.get(`${process.env.HOST}/api/home`);
  return data;
};
export const getDefaultData = async () => {
  try {
    const { data } = await axios.get(`${process.env.HOST}/api/default`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
