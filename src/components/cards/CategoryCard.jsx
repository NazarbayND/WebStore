import "./style.css";
import React from "react";

export const CategoryCard = ({ category }) => {
  return (
    <div className="card card--category">
      <img
        className="card-category__image"
        src={category.image}
        alt="category"
      />
      <p className="card-category__name text text--primary">{category.name}</p>
      <div className="card__footer">
        <p className="text text--gray">{category.description}</p>
      </div>
    </div>
  );
};
