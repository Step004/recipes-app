import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectCategoryFilter } from "../filters/selectors";
import { RootState } from "../store"; // Імпортуємо тип RootState
import { Recipe } from "../../types/Recipe"; // Імпортуємо тип Recipe, якщо він у вас визначений

// Типізуємо селектор selectRecipes
export const selectRecipes = (state: RootState): Recipe[] => state.recipe.items;

// Типізуємо селектор selectFilteredContacts
export const selectFilteredRecipes = createSelector(
  [selectRecipes, selectNameFilter, selectCategoryFilter],
  (recipes: Recipe[], nameFilter: string, categoryFilter: string) => {
    if (!recipes) {
      return [];
    }

    // Фільтруємо за категорією
    let filteredRecipes = recipes;
    if (categoryFilter) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.strCategory === categoryFilter
      );
    }

    // Фільтруємо за ім'ям
    if (nameFilter) {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    return filteredRecipes;
  }
);