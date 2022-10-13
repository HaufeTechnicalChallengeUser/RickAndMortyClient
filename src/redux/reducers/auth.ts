import { AuthState } from "../states/auth";
import { AuthTypes } from "../types/auth";
import { AuthActions } from "../interfaces/auth";

const initialState: AuthState = {
  loading: false,
  authenticated: false,
};

export default function auth(
  state: AuthState = initialState,
  action: AuthActions
) {
  const { type } = action;

  switch (type) {
    case AuthTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case AuthTypes.AUTH_FAIL:
      return {
        ...state,
        authenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
