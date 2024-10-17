import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
import { RootState } from "../store"; // Імпортуємо тип RootState
import { Recipe } from "../../types/Recipe"; // Імпортуємо тип Recipe, якщо він у вас визначений

// Типізуємо селектор selectRecipes
export const selectRecipes = (state: RootState): Recipe[] => state.recipe.items;

// Типізуємо селектор selectFilteredContacts
export const selectFilteredRecipes = createSelector(
  [selectRecipes, selectNameFilter],
  (recipes: Recipe[], filter: string) => {
    if (!filter) {
      return recipes;
    }
     if (!recipes) {
       return [];
     }
    return recipes.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
