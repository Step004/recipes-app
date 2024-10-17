import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "../queries/recipesQueries";
import { Recipe } from "../../types/Recipe";

export const useRecipes = () => {
  return useQuery<Recipe[], Error>({
    queryKey: ["recipes"], // Ключ запиту
    queryFn: fetchAllRecipes, // Функція для отримання даних
  });
};

// export const useFilteredRecipes = (category: string) => {
//   return useQuery(
//     ["filteredRecipes", category],
//     () => filterByCategory(category),
//     {
//       enabled: !!category, 
//     }
//   );
// };
