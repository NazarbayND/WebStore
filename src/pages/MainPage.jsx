import React from "react";
import { Category } from "../components/navigation/Category";
import "./style.css";

export const MainPage = () => {
  return (
    <div className="page">
      <p className="text text--primary ">Категории</p>
      <Category />
    </div>
  );
};
