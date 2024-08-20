import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Review } from "../../types";

interface CurrentUserState {
  user?: { id: string; name: string };
}

const initialState: CurrentUserState = {};

export const movieSlice = createSlice({
  initialState,
  name: "GET_CURRENT_USER",
  reducers: {
    fetch: () => {},
    clearData: (state) => {
      state.user = undefined;
    },
    loaded: (
      state,
      action: PayloadAction<{ user: { id: string; name: string } }>
    ) => {
      state.user = action.payload.user;
    },
    loadError: (state) => {
      state.user = undefined;
    },
  },
});

export const { actions } = movieSlice;
export type SliceAction = typeof actions;
export default movieSlice.reducer;
