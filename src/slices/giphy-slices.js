import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const giphySlices = createSlice({
  name: "giphy",
  initialState,
  reducers: {
    getImageGifs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getImageGifs } = giphySlices.actions;

export default giphySlices.reducer;
