import React from "react";
import "./style.css";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Xbtn } from "../../assets/x-button.svg";
import { InfoButton } from "../button/InfoButton";

export const ProductsCardExpanded = ({
  product,
  amount = 0,
  handlePlus,
  handleMinus,
  handleDelete,
}) => {
  return (
    <div className="card card--expanded">
      <InfoButton position="left" info={product.hint} />
      <img className="card-expanded__image" src={product.image} alt="items" />
      <div className="card-expanded__body">
        <p className="text text--card">{product.name}</p>
        <div className="card-expanded__content">
          <p className="text text--expanded">
            <span className="text--gray"> Срок доставки / </span>
            {product.duration}
          </p>
          <div className="expanded-add-delete">
            <Plus className="icon-btn" onClick={handlePlus} />
            <p className="text text--primary">{amount}</p>
            <Minus className="icon-btn" onClick={handleMinus} />
          </div>
          <p className="text text--expanded">{product.price} тг</p>
        </div>
      </div>
      <Xbtn className="icon--fixed right" onClick={handleDelete} />
    </div>
  );
};
