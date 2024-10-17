import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar";
import css from "./AllRecipesPage.module.css";
import RecipesList from "../../components/RecipesList/RecipesList";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function AllRecipesPage() {
  return (
    <main className={css.container}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <AppBar />
      <SearchBox />
      <RecipesList />
    </main>
  );
}
