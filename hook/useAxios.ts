import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(true);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
