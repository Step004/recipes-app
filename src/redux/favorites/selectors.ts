import { RootState } from "../store";
import { Recipe } from "../../types/Recipe";

export const selectFavorite = (state: RootState): Recipe[] =>
  state.favorite.favorites.items;
