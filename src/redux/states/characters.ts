export interface CharactersState {
  loading: boolean;
  allCharacters: {
    info: {};
    results: character[];
  };
  singleCharacter: character | {};
  multipleCharacters: character[];
}

interface character {
  id: number;
  name: string;
  gender: string;
  type: string;
  status: string;
  image: string;
  species: string;
  location: {
    name: string;
  };
  origin: { name: string };
}
