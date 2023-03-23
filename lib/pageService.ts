import axios from "axios";

export const getHomeData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/home");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getStoreData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/store");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBlogData = async () => {
      const { data } = await axios.get("http://localhost:3000/api/home");
    return data;
  }
export const getDefaultData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/default");
    return data;
  } catch (error) {
    console.log(error);
  }
};
