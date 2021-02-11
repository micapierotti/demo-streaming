import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import moviesReducer from "./moviesSlice";
import seriesReducer from "./seriesSlice";
/* import { loadState } from "./localStorage";

const preloadedState = loadState(); */
export default configureStore({
  reducer: {
    header: headerReducer,
    movies: moviesReducer,
    series: seriesReducer,
  },
  /* preloadedState, */
});
