import React, { useState, ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { fetchRecipesForTheNameThunk } from "../../redux/recipes/operations";
import { debounce } from "lodash";
import { AppDispatch } from "../../redux/store";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nameFilter = useSelector(selectNameFilter);

  const [searchValue, setSearchValue] = useState<string>(nameFilter);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      dispatch(fetchRecipesForTheNameThunk(value));
    }, 1500),
    [dispatch]
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    dispatch(changeFilter(value));

    if (value.trim()) {
      debouncedSearch(value);
    }
  };

  return (
    <div>
      <p>Input name of the meal</p>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBox;
