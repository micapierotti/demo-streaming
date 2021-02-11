import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "Popular Titles",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    headerTextChanged(state, action) {
      const { text } = action.payload;
      state.text = text;
    },
  },
});

export const { headerTextChanged } = headerSlice.actions;

export default headerSlice.reducer;
