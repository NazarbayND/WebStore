import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../components/navigation/Products";

export const ProductsPage = () => {
  return (
    <React.Fragment>
      <div className="page">
        <p className="text text--primary ">
          <Link to="/">
            <span className="text text--gray">Главная / </span>
          </Link>
          Верхная одежда
        </p>
        <Products />
      </div>
    </React.Fragment>
  );
};
