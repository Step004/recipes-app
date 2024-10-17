import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectCategoryFilter } from "../filters/selectors";
import { RootState } from "../store";
import { Recipe } from "../../types/Recipe";

export const selectRecipes = (state: RootState): Recipe[] => state.recipe.items;

export const selectFilteredRecipes = createSelector(
  [selectRecipes, selectNameFilter, selectCategoryFilter],
  (recipes: Recipe[], nameFilter: string, categoryFilter: string) => {
    if (!recipes) {
      return [];
    }

    let filteredRecipes = recipes;
    if (categoryFilter) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.strCategory === categoryFilter
      );
    }

    if (nameFilter) {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    return filteredRecipes;
  }
);
