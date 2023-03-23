import axios from "axios";
const DOMAIN_BACKEND = "http://localhost:8080";
export const fetchData = async (url: string) => {
  try {
    const result = await axios.get(`${DOMAIN_BACKEND + url}`);
    const data = result.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
