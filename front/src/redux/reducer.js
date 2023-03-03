import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
} from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case FILTER:
      const allCharsFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.myFavorites.sort((a, b) => a.id - b.id)
            : state.myFavorites.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
