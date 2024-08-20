export { actions as currentUserActions } from "./slice";
export { default as currentUserReducer } from "./slice";
import { combineEpics } from "redux-observable";
import { currentUserEpic } from "./epics";

export const currentUserEpics = combineEpics(currentUserEpic);
