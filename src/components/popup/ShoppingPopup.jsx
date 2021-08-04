import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Popup from "./Popup";

export const ShoppingPopup = () => {
  return (
    <Popup
      open={false}
      content={
        <div className="popup-content">
          <p className="text text--accent shop-popup__title">
            Спасибо за заказ
          </p>
          <p className="text text--primary shop-popup__text">
            Отслеживайте статус вашего заказа в профиле
          </p>
          <Link to="/" className="btn">
            На главную
          </Link>
        </div>
      }
      xButton={true}
    />
  );
};
