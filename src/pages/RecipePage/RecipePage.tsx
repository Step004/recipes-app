import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { lookupMealById } from "../../services/queries/recipesQueries";
import { Recipe } from "../../types/Recipe";
import css from "./RecipePage.module.css";
import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar";

export default function RecipePage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: recipe,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => lookupMealById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const meal = recipe ? recipe[0] : null;
  if (!meal) return <p>Recipe not found</p>;

  return (
    <main className={css.container}>
      <Helmet>
        <title>{meal.strMeal}</title>
      </Helmet>
      <AppBar />

      <div className={css.recipe}>
        <div>
          <img src={meal.strMealThumb} alt={meal.strMeal} className={css.img} />
          <div className={css.links}>
            {meal.strSource && (
              <a
                href={meal.strSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to official site.
              </a>
            )}
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                How it cook?
              </a>
            )}
          </div>
        </div>
        <div className={css.textMeal}>
          <h1>{meal.strMeal}</h1>
          <p>
            <strong>Category:</strong> {meal.strCategory}
          </p>
          <p>
            <strong>Area:</strong> {meal.strArea}
          </p>
          <p>
            <strong>Instructions:</strong> {meal.strInstructions}
          </p>

          <h3>Ingredients:</h3>
          <ul className={css.ingredients}>
            {Object.keys(meal)
              .filter(
                (key) =>
                  key.startsWith("strIngredient") && meal[key as keyof Recipe]
              )
              .map((key, index) => (
                <li key={index} className={css.oneIngr}>
                  {meal[key as keyof Recipe]} -{" "}
                  {meal[`strMeasure${key.slice(13)}` as keyof Recipe]}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
