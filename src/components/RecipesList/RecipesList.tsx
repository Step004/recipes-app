import { useState } from "react";
import { Recipe } from "../../types/Recipe";
import OneRecipe from "../OneRecipe/OneRecipe";
import css from "./RecipesList.module.css";
import Pagination from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import { fetchRecipesThunk } from "../../redux/recipes/operations";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";

interface RecipesListProps {
  recipes: Recipe[]; 
}

export default function RecipesList({ recipes = [] }: RecipesListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalCount = recipes.length;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchRecipesThunk());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <ul>
        {currentRecipes?.map((recipe: Recipe) => (
          <li className={css.elList} key={recipe.idMeal}>
            <OneRecipe recipe={recipe} />
          </li>
        ))}
      </ul>
      <Pagination
        totalItems={totalCount} 
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
