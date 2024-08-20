export { actions as movieActions } from "./slice";
export { default as movieReducer } from "./slice";
import { combineEpics } from "redux-observable";
import { moviesEpic } from "./epics";

export const movieEpics = combineEpics(moviesEpic);
