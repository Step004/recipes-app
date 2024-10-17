import React, { useState, useEffect } from "react";
import { listAllCategories } from "../../services/queries/recipesQueries";
import css from "./FilterByCategory.module.css";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../redux/filters/slice";

interface Category {
  strCategory: string;
}

const FilterByCategory: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryList = await listAllCategories();
        setCategories(categoryList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category: string = event.target.value;
    setSelectedCategory(category);
    dispatch(changeCategory(category)); 
  };

  return (
    <div className={css.filter}>
      <label htmlFor="category-select">Choose a category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">--Select Category--</option>
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
