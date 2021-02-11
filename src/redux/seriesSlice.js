import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
  serieSelected: undefined,
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    setSeries(state, action) {
      const { series } = action.payload;
      state.series = series;
    },
    setSelectedSerie(state, action) {
      const { serie } = action.payload;
      state.serieSelected = serie;
    },
  },
});

export const { setSeries, setSelectedSerie } = seriesSlice.actions;
export default seriesSlice.reducer;

export const selectSeries = (state) => state.series.series;
export const selectSerieSelected = (state) => state.series.serieSelected;
