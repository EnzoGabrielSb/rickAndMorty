import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  ADD_CHARACTER,
} from "./actions-types";

import axios from "axios";

export const addFavorite = (character) => {
  //return { type: ADD_FAVORITES, payload: character };

  return { type: ADD_FAVORITES, payload: character };
};

export const deleteFav = (id) => {
  //return { type: DELETE_FAVORITES, payload: id };

  return async (dispatch) => {
    return dispatch({
      type: DELETE_FAVORITES,
      payload: id,
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
