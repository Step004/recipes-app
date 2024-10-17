import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

const AllRecipesPage = lazy(
  () => import("../../pages/AllRecipesPage/AllRecipesPage")
);
const RecipePage = lazy(
  () => import("../../pages/RecipePage/RecipePage") 
);
const FavoritesPage = lazy(
  () => import("../../pages/FavoritePage/FavoritePage")
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AllRecipesPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};

export default App;
