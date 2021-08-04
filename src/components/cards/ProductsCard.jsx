import React from "react";
import "./style.css";
import categoryImage from "../../assets/main.jpg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { InfoButton } from "../button/InfoButton";

export const ProductsCard = ({
  product,
  amount = 0,
  handlePlus,
  handleMinus,
}) => {
  return (
    <div className="card card--items">
      <img className="card-items__image" src={product.image} alt="products" />
      <div className="card__body">
        <p className="text text--card">{product.name}</p>
        <p className="text text--card">
          <span className="text--gray"> Срок доставки / </span>
          {product.duration}
        </p>
        <p className="text text--card">{product.price} тг</p>
        <div className="items-add-delete">
          <Plus className="icon-btn" onClick={handlePlus} />
          <p className="text text--primary">{amount}</p>
          <Minus className="icon-btn" onClick={handleMinus} />
        </div>
      </div>
      <InfoButton position="right" info={product.hint} />
    </div>
  );
};
