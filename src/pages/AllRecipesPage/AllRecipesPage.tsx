import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar";
import css from "./AllRecipesPage.module.css";
import RecipesList from "../../components/RecipesList/RecipesList";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterByCategory from "../../components/FilterByCategory/FilterByCategory";
import { useSelector } from "react-redux";
import { selectFilteredRecipes } from "../../redux/recipes/selectors";

const AllRecipesPage: React.FC = () => {
  const recipes = useSelector(selectFilteredRecipes);

  return (
    <main className={css.container}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <AppBar />
      <div className={css.filters}>
        <FilterByCategory />
        <SearchBox />
      </div>
      <RecipesList recipes={recipes} />
    </main>
  );
};

export default AllRecipesPage;
