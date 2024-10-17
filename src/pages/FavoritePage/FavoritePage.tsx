import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar";
import css from "./FavoritePage.module.css";

export default function FavoritePage() {
  return (
    <main className={css.container}>
      <Helmet>
        <title>Favorite Page</title>
      </Helmet>

      <AppBar />
    </main>
  );
}
