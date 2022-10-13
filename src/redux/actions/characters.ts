import axios from "axios";
import { CharactersTypes } from "../types/characters";
import { alertErrors } from "../../shared/utils/alertErrors";
import { TypedDispatch } from "../store";

export const getAllCharacters =
  (page: string, search: string) => async (dispatch: TypedDispatch) => {
    dispatch({
      type: CharactersTypes.CHARACTERS_REQUEST,
    });

    try {
      const res = await axios.get(
        `/api/characters/all?page=${page}&search=${search}`
      );

      dispatch({
        type: CharactersTypes.ALL_CHARACTERS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      alertErrors(dispatch, error);

      dispatch({
        type: CharactersTypes.CHARACTERS_FAIL,
      });
    }
  };

export const getSingleCharacter =
  (id: string) => async (dispatch: TypedDispatch) => {
    dispatch({
      type: CharactersTypes.CHARACTERS_REQUEST,
    });

    try {
      const res = await axios.get(`/api/characters/single/${id}`);
      dispatch({
        type: CharactersTypes.SINGLE_CHARACTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      alertErrors(dispatch, error);

      dispatch({
        type: CharactersTypes.CHARACTERS_FAIL,
      });
    }
  };

export const getMultipleCharacters =
  (ids: string) => async (dispatch: TypedDispatch) => {
    dispatch({
      type: CharactersTypes.CHARACTERS_REQUEST,
    });

    try {
      const res = await axios.get(`/api/characters/multiple/${ids}`);
      dispatch({
        type: CharactersTypes.MULTIPLE_CHARACTERS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      alertErrors(dispatch, error);

      dispatch({
        type: CharactersTypes.CHARACTERS_FAIL,
      });
    }
  };
