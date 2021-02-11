import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSeries } from "./redux/seriesSlice";
import { setMovies } from "./redux/moviesSlice";
import { fetchData } from "./api";

export default function useFetch(url) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMoviesFetch] = useState([]);
  const [series, setSeriesFetch] = useState([]);

  useEffect(() => {
    async function fetchSeriesMovies() {
      try {
        const { series, movies } = await fetchData();
        setMoviesFetch(movies);
        setSeriesFetch(series);
      } catch (e) {
        setError(true);
        console.log(e);
      }
      setLoading(false);
    }
    fetchSeriesMovies();
  }, [url]);

  useEffect(() => {
    dispatch(setSeries({ series }));
  }, [series]);

  useEffect(() => {
    dispatch(setMovies({ movies }));
  }, [movies]);

  return { movies, series, loading, error };
}
