import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_HOST } from "@env";

const useFetch = (endpoint: string, query?: string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(false);

  const options = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com${endpoint}`,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
    params: query,
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Error occured!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export { useFetch };
