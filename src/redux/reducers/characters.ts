import { CharactersState } from "../states/characters";
import { CharactersTypes } from "../types/characters";
import { CharactersActions } from "../interfaces/characters";

const initialState: CharactersState = {
  loading: false,
  allCharacters: {
    info: {},
    results: [],
  },
  singleCharacter: {},
  multipleCharacters: [],
};

export const alert = (
  state: CharactersState = initialState,
  action: CharactersActions
) => {
  const { type, payload } = action;

  switch (type) {
    case CharactersTypes.CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CharactersTypes.ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        allCharacters: payload,
        loading: false,
      };
    case CharactersTypes.SINGLE_CHARACTER_SUCCESS:
      return {
        ...state,
        singleCharacter: payload,
        loading: false,
      };
    case CharactersTypes.MULTIPLE_CHARACTERS_SUCCESS:
      return {
        ...state,
        multipleCharacters: payload,
        loading: false,
      };
    case CharactersTypes.CHARACTERS_FAIL:
      return {
        ...state,
        allCharacters: {
          info: {},
          results: [],
        },
        singleCharacter: {},
        multipleCharacters: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default alert;
