import { createAsyncThunk } from "@reduxjs/toolkit";
import { Recipe } from "../../types/Recipe";
import {
  fetchAllRecipes,
  filterByCategory,
  searchMealByName,
} from "../../services/queries/recipesQueries";

export const fetchRecipesThunk = createAsyncThunk<
  Recipe[],
  void,
  { rejectValue: string }
>("recipes/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await fetchAllRecipes();
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch recipes");
  }
});

export const fetchRecipesForTheNameThunk = createAsyncThunk<
  Recipe[],
  string,
  { rejectValue: string }
>("recipes/fetchByName", async (name: string, thunkAPI) => {
  try {
    const response = await searchMealByName(name);
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch recipes");
  }
});

export const fetchRecipesByCategoriesThunk = createAsyncThunk<
  Recipe[],
  string,
  { rejectValue: string }
>("recipes/fetchByCategories", async (category: string, thunkAPI) => {
  try {
    const response = await filterByCategory(category);
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch recipes");
  }
});

