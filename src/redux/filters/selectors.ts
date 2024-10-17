import { RootState } from "../store";

export const selectNameFilter = (state: RootState) => state.filter.filters.name;
export const selectCategoryFilter = (state: RootState) =>
  state.filter.filters.category;
