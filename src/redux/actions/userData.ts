import axios from "axios";
import { headers } from "../../shared/utils/conf";
import { UserDataTypes } from "../types/userData";
import { alertErrors } from "../../shared/utils/alertErrors";
import { TypedDispatch } from "../store";

export const getUserData = () => async (dispatch: TypedDispatch) => {
  dispatch({
    type: UserDataTypes.USER_DATA_REQUEST,
  });

  try {
    const res = await axios.get("/api/user/userdata");
    dispatch({
      type: UserDataTypes.USER_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    alertErrors(dispatch, error);
    dispatch({
      type: UserDataTypes.USER_DATA_FAIL,
    });
  }
};

export const putUserData =
  (userData: { favorite: number }) => async (dispatch: TypedDispatch) => {
    dispatch({
      type: UserDataTypes.USER_DATA_REQUEST,
    });

    try {
      const res = await axios.put("/api/user/userdata", userData, {
        headers,
      });
      dispatch({
        type: UserDataTypes.USER_DATA_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      alertErrors(dispatch, error);

      dispatch({
        type: UserDataTypes.USER_DATA_FAIL,
      });
    }
  };
