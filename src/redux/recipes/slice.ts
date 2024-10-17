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
        state.loading = true; // Зміна на true при очікуванні
        state.error = null; // Обнулити помилку
      })
      .addCase(
        fetchRecipesThunk.fulfilled,
        (state, action: PayloadAction<Recipe[]>) => {
          state.items = action.payload;
          state.loading = false; // Завантаження закінчено
        }
      )
      .addCase(fetchRecipesThunk.rejected, (state, action) => {
        state.loading = false; // Завантаження закінчено
        state.error = action.payload || "Something went wrong"; // Встановити повідомлення про помилку
      });
  },
});

// Експорт екшенів і редюсера
export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
