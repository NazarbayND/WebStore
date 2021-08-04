import React from "react";
import { CategoryCard } from "../cards/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  return (
    <div className="category">
      {categories.map((category) => (
        <Link to={`products/:${category._id}`} key={category._id}>
          <CategoryCard category={category} />
        </Link>
      ))}
    </div>
  );
};
