import { useNavigate } from "react-router-dom";
import { Recipe } from "../../types/Recipe";
import css from "./OneRecipe.module.css";
import { useState } from "react";

interface OneRecipeProps {
  recipe: Recipe;
}

const OneRecipe: React.FC<OneRecipeProps> = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipe/${recipe.idMeal}`); // Перейдіть на сторінку рецепту
  };
  const handleClickChoose = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={css.card}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className={css.img} />

      <h2 className={css.strMeal}>{recipe.strMeal}</h2>
      <div className={css.descriptionMeal}>
        <h3 className={css.instruction}>{recipe.strArea}</h3>
        <h3 className={css.instruction}>{recipe.strCategory}</h3>
      </div>

      <div className={css.buttons}>
        <button className={css.buttonReadMore} onClick={handleClick}>
          Read more!
        </button>
        {!isFavorite ? (
          <button className={css.buttonReadMore} onClick={handleClickChoose}>
            Choose!
          </button>
        ) : (
          <button className={css.buttonReadMore} onClick={handleClickChoose}>
            Delete!
          </button>
        )}
      </div>
    </div>
  );
};

export default OneRecipe;
