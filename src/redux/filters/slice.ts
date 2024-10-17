import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  filters: {
    name: string;
    category: string;
  };
}

const initialState: FiltersState = {
  filters: {
    name: "",
    category: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filters.name = action.payload;
    },
    changeCategory: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload; 
    },
  },
});

export const { changeFilter, changeCategory } = slice.actions;
export default slice.reducer;
