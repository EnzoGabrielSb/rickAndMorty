import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actions-types";

export const addFavorite = (character) => {
  return { type: ADD_FAVORITES, payload: character };
};

export const deleteFav = (id) => {
  return { type: DELETE_FAVORITES, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
