import { AuthTypes } from "../types/auth";

interface AuthRequestAction {
  type: AuthTypes.AUTH_REQUEST;
}

interface AuthSuccesAction {
  type: AuthTypes.AUTH_SUCCESS;
}

interface AuthFailAction {
  type: AuthTypes.AUTH_FAIL;
}

export type AuthActions = AuthRequestAction | AuthSuccesAction | AuthFailAction;
