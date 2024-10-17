import { Recipe } from "../../types/Recipe";

export const fetchAllRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await response.json();
  return data.meals as Recipe[]; // Застосовуємо типізацію до отриманих даних
};

// Функція для пошуку страви за назвою
export const searchMealByName = async (name: string): Promise<Recipe[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }
  const data = await response.json();
  return data.meals as Recipe[];
};


// Функція для отримання деталей страви за ID
export const lookupMealById = async (id: string): Promise<Recipe[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meal details");
  }
  const data = await response.json();
  return data.meals as Recipe[];
};

// Функція для фільтрації за категорією
export const filterByCategory = async (category: string): Promise<Recipe[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meals by category");
  }
  const data = await response.json();
  return data.meals as Recipe[];
};


// Функція для отримання всіх категорій
export const listAllCategories = async (): Promise<any[]> => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data.categories;
};

