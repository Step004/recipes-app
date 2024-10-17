import { createAsyncThunk } from "@reduxjs/toolkit";
import { Recipe } from "../../types/Recipe";
import { fetchAllRecipes, searchMealByName } from "../../services/queries/recipesQueries";

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
>("recipes/fetchAll", async (name: string, thunkAPI) => {
  try {
    const response = await searchMealByName(name); 
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch recipes");
  }
});