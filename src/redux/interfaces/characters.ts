import { CharactersTypes } from "../types/characters";

interface CharactersRequestAction {
  type: CharactersTypes.CHARACTERS_REQUEST;
  payload: {};
}

interface CharactersSuccessAction {
  type: CharactersTypes.ALL_CHARACTERS_SUCCESS;
  payload: object;
}

interface CharacterSingleSuccessAction {
  type: CharactersTypes.SINGLE_CHARACTER_SUCCESS;
  payload: object;
}

interface CharactersMultipleSuccessAction {
  type: CharactersTypes.MULTIPLE_CHARACTERS_SUCCESS;
  payload: object;
}

interface CharactersFailAction {
  type: CharactersTypes.CHARACTERS_FAIL;
  payload: {};
}

export type CharactersActions =
  | CharactersRequestAction
  | CharactersSuccessAction
  | CharacterSingleSuccessAction
  | CharactersMultipleSuccessAction
  | CharactersFailAction;
