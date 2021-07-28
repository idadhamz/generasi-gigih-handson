const initialState = { Gifs: [] };

function GiphyReducers(state = initialState, action) {
  switch (action.type) {
    case "searchGif":
      return { ...state, Gifs: action.payload };
    default:
      return state;
  }
}

export default GiphyReducers;
