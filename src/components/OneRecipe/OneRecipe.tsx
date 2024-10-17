import { useNavigate } from "react-router-dom";
import { Recipe } from "../../types/Recipe";
import css from "./OneRecipe.module.css";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorites/selectors";

interface OneRecipeProps {
  recipe: Recipe;
}

const OneRecipe: React.FC<OneRecipeProps> = ({ recipe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector(selectFavorite);

  const isFavorite = favorites.some(
    (fav: Recipe) => fav.idMeal === recipe.idMeal
  );

  const handleClick = () => {
    navigate(`/recipe/${recipe.idMeal}`); // Перейдіть на сторінку рецепту
  };
  const handleClickChoose = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.idMeal));
    } else {
      dispatch(addFavorite(recipe));
    }
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
