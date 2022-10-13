import { combineReducers } from "redux";
import alerts from "./alerts";
import auth from "./auth";
import user from "./user";
import userData from "./userData";
import characters from "./characters";

const rootReducer = combineReducers({
  alerts,
  auth,
  user,
  userData,
  characters,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
