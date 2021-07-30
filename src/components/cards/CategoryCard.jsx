import "./style.css";
import categoryImage from "../../assets/main.jpg";
import React from "react";

export const CategoryCard = () => {
  return (
    <div className="card card--category">
      <div className="img img--category">
        {" "}
        <img src={categoryImage} alt="" />
      </div>

      <p>Office clothes</p>
      <div>
        <p>Shorts</p>
        <p>Something</p>
        <p>Jempers</p>
        <p>...</p>
      </div>
    </div>
  );
};
