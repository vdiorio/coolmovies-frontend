import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";
import { GET_CURRENT_USER } from "../../../gql/queries";

export const currentUserEpic: Epic = (
  action$: Observable<SliceAction["fetch"]>,
  _state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async () => {
      try {
        const currentUserResult = await client.query({
          query: GET_CURRENT_USER,
        });

        return actions.loaded({
          user: currentUserResult.data.currentUser,
        });
      } catch (err) {
        return actions.loadError();
      }
    })
  );
