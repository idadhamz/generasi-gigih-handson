import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store'

interface GiphyState {
  value: Array<any>
}

const initialState: GiphyState = {
  value: [],
};

export const giphySlices = createSlice({
  name: "giphy",
  initialState,
  reducers: {
    getImageGifs: (state, action: PayloadAction<Array<any>>) => {
      state.value = action.payload;
    },
  },
});

export const { getImageGifs } = giphySlices.actions;

export const giphyValue = (state: RootState) => state.giphy.value

export default giphySlices.reducer;
