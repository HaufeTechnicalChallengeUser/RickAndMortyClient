import { openAlert } from "../../redux/actions/alerts";
import { TypedDispatch } from "../../redux/store";

export const alertErrors = (dispatch: TypedDispatch, error: any) => {
  if (error.response && error.response?.status !== 500) {
    const responseError = error.response?.data.errors;
    dispatch(openAlert("error", responseError[0].msg));
  } else {
    dispatch(openAlert("error", "Serer error"));
  }
};
