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

// Функція для отримання страви за першим літерам
export const listMealsByFirstLetter = async (
  letter: string
): Promise<Recipe[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
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

// Функція для отримання випадкової страви
export const lookupRandomMeal = async (): Promise<Recipe[]> => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch random meal");
  }
  const data = await response.json();
  return data.meals as Recipe[];
};

// Функція для фільтрації за основним інгредієнтом
export const filterByMainIngredient = async (
  ingredient: string
): Promise<Recipe[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meals by ingredient");
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

// Функція для фільтрації за областю
export const filterByArea = async (area: string): Promise<Recipe[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meals by area");
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

// Функція для отримання всіх інгредієнтів
export const listAllIngredients = async (): Promise<any[]> => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch ingredients");
  }
  const data = await response.json();
  return data.ingredients;
};
