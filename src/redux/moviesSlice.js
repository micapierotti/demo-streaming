import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieSelected: undefined,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      const { movies } = action.payload;
      state.movies = movies;
    },
    setSelectedMovie(state, action) {
      const { movie } = action.payload;
      state.movieSelected = movie;
    },
  },
});

export const { setMovies, setSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;

export const selectMovies = (state) => state.movies.movies;
export const selectMovieSelected = (state) => state.movies.movieSelected;
