import { configureStore } from "@reduxjs/toolkit";
import giphySlices from "./slices/giphy-slices";

export default configureStore({
  reducer: {
    giphy: giphySlices,
  },
});
