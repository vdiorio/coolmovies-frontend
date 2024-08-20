import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";
import {
  GET_CURRENT_USER,
  GET_REVIEWS_BY_MOVIE_ID,
} from "../../../gql/queries";
import { CREATE_MOVIE_REVIEW, EDIT_MOVIE_REVIEW } from "../../../gql/mutations";
import { use } from "react";

export const reviewsEpic: Epic = (
  action$: Observable<SliceAction["fetch"]>,
  _state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async (action) => {
      try {
        const { movieId } = action.payload;
        const result = await client.query({
          query: GET_REVIEWS_BY_MOVIE_ID,
          variables: { movieId },
          fetchPolicy: "network-only",
        });
        return actions.loaded({
          reviews: result.data.allMovieReviews.nodes,
          movie: result.data.movieById,
        });
      } catch (err) {
        return actions.loadError();
      }
    })
  );

export const editReviewsEpic: Epic = (
  action$: Observable<SliceAction["update"]>,
  _state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.update.match),
    switchMap(async (action) => {
      try {
        const { id, title, body, rating, movieId, nodeId } = action.payload;
        await client.mutate({
          mutation: EDIT_MOVIE_REVIEW,
          variables: { id, title, body, rating, nodeId },
        });
        actions.clearReviews();
        return actions.fetch({ movieId });
      } catch (err) {
        console.error("Error editing review:", err);
      }
    })
  );

export const createReviewsEpic: Epic = (
  action$: Observable<SliceAction["create"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.create.match),
    switchMap(async (action) => {
      try {
        const { title, body, rating, movieId } = action.payload;

        await client.mutate({
          mutation: CREATE_MOVIE_REVIEW,
          variables: {
            title,
            body,
            rating,
            movieId,
            userReviewerId: state$.value.currentUser.user?.id as string,
          },
        });
        actions.clearReviews();
        return actions.fetch({ movieId });
      } catch (err) {
        console.error("Error creating review:", err);
      }
    })
  );
