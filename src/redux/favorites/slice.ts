import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/Recipe";

interface FavoriteState {
  favorites: {
    items: Recipe[];
  };
}

const loadFavoritesFromLocalStorage = (): Recipe[] => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const initialState: FavoriteState = {
  favorites: {
    items: loadFavoritesFromLocalStorage(),
  },
};

const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Recipe>) => {
      state.favorites.items.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites.items));
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.items = state.favorites.items.filter(
        (recipe) => recipe.idMeal !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites.items));
    },
  },
});

export const { addFavorite, removeFavorite } = slice.actions;
export default slice.reducer;
