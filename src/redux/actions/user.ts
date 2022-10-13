import axios from "axios";
import { UserTypes } from "../types/user";
import { alertErrors } from "../../shared/utils/alertErrors";
import { TypedDispatch } from "../store";

export const getUser = () => async (dispatch: TypedDispatch) => {
  dispatch({
    type: UserTypes.USER_REQUEST,
  });

  try {
    const res = await axios.get("/api/user");
    dispatch({
      type: UserTypes.USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    alertErrors(dispatch, error);

    dispatch({
      type: UserTypes.USER_FAIL,
    });
  }
};
