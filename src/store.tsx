import { configureStore } from "@reduxjs/toolkit";
import giphySlices from "./slices/giphy-slices";

export const store = configureStore({
  reducer: {
    giphy: giphySlices,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch