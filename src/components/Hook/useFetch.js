/* import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_KEY = 'd94f1660bc08f9c6e6ef31fbeee3057f';
const BASE_URL = 'https://api.themoviedb.org/3/';
const BY_SEARCH_URL = 'search/movie';
 

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(`${BASE_URL}${BY_SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`);
      await setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch; */