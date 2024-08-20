import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, Review } from "../../types";

interface ReviewState {
  movie?: Movie;
  reviews?: Review[];
  error?: string;
}

const initialState: ReviewState = {};

export const movieSlice = createSlice({
  initialState,
  name: "GET_REVIEWS_BY_MOVIE_ID",
  reducers: {
    fetch: (state, action: PayloadAction<{ movieId: string }>) => {},
    update: (
      state,
      action: PayloadAction<Omit<Review, "userByUserReviewerId">>
    ) => {},
    create: (
      state,
      action: PayloadAction<
        Omit<Review, "id" | "userByUserReviewerId" | "nodeId">
      >
    ) => {},
    clearData: (state) => {
      state.movie = undefined;
      state.reviews = undefined;
      state.error = undefined;
    },
    clearReviews: (state) => {
      state.reviews = undefined;
    },
    loaded: (
      state,
      action: PayloadAction<{ reviews: Review[]; movie: Movie }>
    ) => {
      state.movie = action.payload.movie;
      state.reviews = action.payload.reviews;
      state.error = undefined;
    },
    loadError: (state) => {
      state.movie = undefined;
      state.reviews = undefined;
      state.error = "Error Fetching :(";
    },
  },
});

export const { actions } = movieSlice;
export type SliceAction = typeof actions;
export default movieSlice.reducer;
