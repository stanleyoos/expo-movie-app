import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "@env";

const useFetch = () => {
  console.log(API_KEY);
  //   const options = {
  //     method: "GET",
  //     url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
  //     headers: {
  //       "X-RapidAPI-Key": "e78c36ec0emsh26dfcc8fc431ebcp14ae35jsne965178c7d1c",
  //       "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  //     },
  //   };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
};

export { useFetch };
