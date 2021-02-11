import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovieSelected,
  setSelectedMovie,
  selectMovies,
} from "../redux/moviesSlice";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../api";
import { headerTextChanged } from "../redux/headerSlice";

const SelectedMovie = () => {
  const { indexId } = useParams();
  const movie = useSelector(selectMovieSelected);
  const movies = useSelector(selectMovies);

  const dispatch = useDispatch();
  const handleOnClickText = (text) => dispatch(headerTextChanged({ text }));

  useEffect(() => {
    handleOnClickText("Popular Movies");
    async function fetchMovieData() {
      if (!movie) {
        let movieTemp;
        if (movies?.length > 0) {
          movieTemp = movies[indexId];
        } else {
          movieTemp = await fetchMovie(indexId);
        }
        dispatch(setSelectedMovie({ movie: movieTemp }));
      }
    }
    fetchMovieData();
  }, []);

  let {
    title,
    images = { "Poster Art": { url: undefined } },
    description,
    releaseYear,
  } = movie || {};

  return (
    !!movie && (
      <div className="p-0 container-fluid">
        <div className="wrapper">
          <div className="d-flex justify-content-start">
            <div className="bloque serie mt-5">
              <img src={images["Poster Art"].url} alt={title} />
            </div>
            <div className="flex-grow-1 mt-5 ml-3">
              <h1 className="title">{title}</h1>
              <p className="paragraph-size par-adjust text-justify">
                {description}
              </p>
              <p className="paragraph-size par-adjust text-justify">
                <b>Release year:</b> {releaseYear}
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    )
  );
};

export default SelectedMovie;
