import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";
import { GET_REVIEWS_BY_MOVIE_ID } from "../../../gql/queries";

export const reviewsEpic: Epic = (
  action$: Observable<SliceAction["fetch"]>,
  _state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async (action) => {
      console.log("result");
      try {
        const { movieId } = action.payload;
        const result = await client.query({
          query: GET_REVIEWS_BY_MOVIE_ID,
          variables: { movieId },
        });
        console.log(result);
        return actions.loaded({
          reviews: result.data.allMovieReviews.nodes,
          movie: result.data.movieById,
        });
      } catch (err) {
        return actions.loadError();
      }
    })
  );
