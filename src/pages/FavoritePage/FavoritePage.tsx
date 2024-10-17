import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar";
import css from "./FavoritePage.module.css";
import RecipesList from "../../components/RecipesList/RecipesList";
import { selectFavorite } from "../../redux/favorites/selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Recipe } from "../../types/Recipe";

export default function FavoritePage() {
  const recipes = useSelector(selectFavorite);
  const [ingredients, setIngredients] = useState<
    { name: string; quantity: string }[]
  >([]);

useEffect(() => {
  if (recipes.length > 0) {
    const allIngredients: {
      [key: string]: { quantity: string; measure: string };
    } = {};

    recipes.forEach((recipe: Recipe) => {
      for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const quantity = recipe[`strMeasure${i}`];

        // Перевірка, чи інгредієнт не є порожнім або null
        if (ingredient && ingredient.trim()) {
          // Використовуємо ?? для заміни null на порожній рядок
          if (allIngredients[ingredient]) {
            allIngredients[ingredient].quantity += `, ${quantity ?? ""}`;
          } else {
            allIngredients[ingredient] = {
              quantity: quantity ?? "", // Заміна null на порожній рядок
              measure: quantity ?? "",
            };
          }
        }
      }
    });

    const ingredientList = Object.keys(allIngredients).map((ingredient) => ({
      name: ingredient,
      quantity: allIngredients[ingredient].quantity,
    }));

    setIngredients(ingredientList);
  }
}, [recipes]);

  return (
    <main className={css.container}>
      <Helmet>
        <title>Favorite Page</title>
      </Helmet>
      <AppBar />
      <ul className={css.ingredientList}>
        {ingredients.map((ingredient) => (
          <li className={css.ingredient}>
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <p>You can view the cooking instructions by clicking read more</p>

      <RecipesList recipes={recipes} />
    </main>
  );
}
