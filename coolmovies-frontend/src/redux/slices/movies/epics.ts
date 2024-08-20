import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";
import { GET_ALL_MOVIES } from "../../../gql/queries";

export const moviesEpic: Epic = (
  action$: Observable<SliceAction["fetch"]>,
  _state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async () => {
      try {
        const result = await client.query({
          query: GET_ALL_MOVIES,
        });
        return actions.loaded({ data: result.data.allMovies.nodes });
      } catch (err) {
        return actions.loadError();
      }
    })
  );
