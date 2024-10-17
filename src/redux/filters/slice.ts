import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  filters: {
    name: string;
  };
}

const initialState: FiltersState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
