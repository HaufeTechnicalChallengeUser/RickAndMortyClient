import { AlertTypes } from "../types/alerts";

interface OpenAlertAction {
  type: AlertTypes.OPEN_ALERT;
  payload: {
    condition: string;
    text: string;
  };
}

interface CloseAlertAction {
  type: AlertTypes.CLOSE_ALERT;
  payload: {};
}

export type AlertActions = OpenAlertAction | CloseAlertAction;
