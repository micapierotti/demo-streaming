import React, { useEffect } from "react";
import "./series-movies.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovies,
  setSelectedMovie,
  setMovies,
} from "../redux/moviesSlice";
import { Link } from "react-router-dom";
import { headerTextChanged } from "../redux/headerSlice";
import { fetchData } from "../api";

const Movies = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  const handleOnClickMovie = (movie) => {
    dispatch(setSelectedMovie({ movie }));
  };
  const handleOnClickText = (text) => dispatch(headerTextChanged({ text }));

  useEffect(() => {
    handleOnClickText("Popular Movies");
    async function fetchMovies() {
      if (!movies?.length) {
        const { movies } = await fetchData();
        dispatch(setMovies({ movies }));
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="container-fluid">
      <div className="wrapper">
        <div className="d-flex flex-wrap justify-content-left">
          {Array.isArray(movies) &&
            movies.map((movie, index) => {
              const { title, images } = movie;
              return (
                <div key={title}>
                  <Link
                    to={`/movies/${index}`}
                    onClick={() => handleOnClickMovie(movie)}
                  >
                    <div className="bloque">
                      <img
                        src={images["Poster Art"].url}
                        alt={title}
                        className="logo-series-movies"
                      />
                    </div>
                  </Link>
                  <div className="ajuste-tam text-wrap">
                    <p className="paragraph-size">{title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
