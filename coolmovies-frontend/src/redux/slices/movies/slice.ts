import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types";

interface MovieState {
  movies?: Movie[];
  error?: string;
}

const initialState: MovieState = {};

export const movieSlice = createSlice({
  initialState,
  name: "GET_MOVIES",
  reducers: {
    fetch: () => {},
    clearData: (state) => {
      state.movies = undefined;
      state.error = undefined;
    },
    loaded: (state, action: PayloadAction<{ data: Movie[] }>) => {
      state.movies = action.payload.data;
      state.error = undefined;
    },
    loadError: (state) => {
      state.movies = undefined;
      state.error = "Error Fetching :(";
    },
  },
});

export const { actions } = movieSlice;
export type SliceAction = typeof actions;
export default movieSlice.reducer;
