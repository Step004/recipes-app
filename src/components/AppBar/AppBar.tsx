import Navigation from "../Navigation/Navigation.tsx";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <p className={css.logotype}>Recipes</p>
      <Navigation />
    </header>
  );
}
