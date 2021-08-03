import "./style.css";
import categoryImage from "../../assets/main.jpg";
import React from "react";

export const CategoryCard = () => {
  return (
    <div className="card card--category">
      <img
        className="card-category__image"
        src={categoryImage}
        alt="category"
      />

      <p className="card-category__name text text--primary">Office clothes</p>
      <div className="card__footer">
        <p className="text">Shorts</p>
        <p className="text">Something</p>
        <p className="text">Jempers</p>
        <p className="text">...</p>
      </div>
    </div>
  );
};
