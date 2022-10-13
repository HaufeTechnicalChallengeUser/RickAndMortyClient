import { AlertState } from "../states/alerts";
import { AlertTypes } from "../types/alerts";
import { AlertActions } from "../interfaces/alerts";

const initialState: AlertState = {
  open: false,
  condition: "success",
  text: "",
};

export const alert = (
  state: AlertState = initialState,
  action: AlertActions
) => {
  const { type, payload } = action;

  switch (type) {
    case AlertTypes.OPEN_ALERT:
      return {
        ...state,
        open: true,
        condition: payload.condition,
        text: payload.text,
      };
    case AlertTypes.CLOSE_ALERT:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default alert;
