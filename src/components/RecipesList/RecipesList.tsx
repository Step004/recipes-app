import { useRecipes } from "../../services/hooks/useRecipes";
import { Recipe } from "../../types/Recipe";
import OneRecipe from "../OneRecipe/OneRecipe";
import css from './RecipesList.module.css'

export default function RecipesList() {
  const { data: recipes, error, isLoading } = useRecipes(); // Додайте isLoading

  if (isLoading) return <p>Loading...</p>; // Обробка стану завантаження
  if (error) return <p>Error: {error.message}</p>; // Обробка помилок

  return (
    <div>
      <ul>
        {recipes?.map((recipe: Recipe) => (
          <li className={css.elList} key={recipe.idMeal}>
            <OneRecipe recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}
