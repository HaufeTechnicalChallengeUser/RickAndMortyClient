import { UserState } from "../states/user";
import { UserTypes } from "../types/user";
import { UserActions } from "../interfaces/user";

const initialState: UserState = {
  loading: false,
  user: {
    username: "",
  },
};

export default function user(
  state: UserState = initialState,
  action: UserActions
) {
  const { type, payload } = action;

  switch (type) {
    case UserTypes.USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserTypes.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case UserTypes.USER_FAIL:
      return {
        ...state,
        loading: false,
        data: {},
      };
    default:
      return state;
  }
}
