import { TypedDispatch } from "../store";
import { AlertTypes } from "../types/alerts";

export const openAlert =
  (condition: string, text: string) => (dispatch: TypedDispatch) => {
    dispatch({
      type: AlertTypes.OPEN_ALERT,
      payload: { condition, text },
    });
    setTimeout(() => {
      dispatch(closeAlert());
    }, 3000);
  };

export const closeAlert = () => (dispatch: TypedDispatch) => {
  dispatch({
    type: AlertTypes.CLOSE_ALERT,
  });
};
