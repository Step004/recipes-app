import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/Recipe";
import { fetchRecipesThunk } from "./operations";

interface RecipesState {
  items: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  items: [],
  loading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRecipesThunk.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchRecipesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
