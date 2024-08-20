export { actions as reviewsActions } from "./slice";
export { default as reviewsReducer } from "./slice";
import { combineEpics } from "redux-observable";
import { createReviewsEpic, editReviewsEpic, reviewsEpic } from "./epics";

export const reviewsEpics = combineEpics(
  reviewsEpic,
  editReviewsEpic,
  createReviewsEpic
);
