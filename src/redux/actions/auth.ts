import axios from "axios";
import { headers } from "../../shared/utils/conf";
import setAuthToken from "../../shared/utils/setAuthToken";
import { AuthTypes } from "../types/auth";
import { UserTypes } from "../types/user";
import { alertErrors } from "../../shared/utils/alertErrors";
import { TypedDispatch } from "../store";

const authFail = (dispatch: TypedDispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: AuthTypes.AUTH_FAIL,
  });
  dispatch({
    type: UserTypes.USER_SUCCESS,
    payload: {},
  });
};

export const auth = () => async (dispatch: TypedDispatch) => {
  dispatch({
    type: AuthTypes.AUTH_REQUEST,
  });
  dispatch({
    type: UserTypes.USER_REQUEST,
  });

  if (localStorage.token) {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get("/api/user");

      dispatch({
        type: AuthTypes.AUTH_SUCCESS,
      });
      dispatch({
        type: UserTypes.USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      authFail(dispatch);
    }
  } else {
    authFail(dispatch);
  }
};

export const signin =
  (credentials: { username: string; password: string }) =>
  async (dispatch: TypedDispatch) => {
    dispatch({
      type: AuthTypes.AUTH_REQUEST,
    });

    try {
      const res = await axios.post("/api/auth/signin", credentials, {
        headers,
      });
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: AuthTypes.AUTH_SUCCESS,
      });
      dispatch(auth());
    } catch (error) {
      alertErrors(dispatch, error);

      authFail(dispatch);
    }
  };

export const signup =
  (credentials: { username: string; password: string }) =>
  async (dispatch: TypedDispatch) => {
    dispatch({
      type: AuthTypes.AUTH_REQUEST,
    });

    try {
      const res = await axios.post("/api/auth/signup", credentials, {
        headers,
      });
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: AuthTypes.AUTH_SUCCESS,
      });
      dispatch(auth());
    } catch (error) {
      alertErrors(dispatch, error);

      authFail(dispatch);
    }
  };

export const signout = () => (dispatch: TypedDispatch) => {
  authFail(dispatch);
};
