import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Popup from "./Popup";

export const ShoppingPopup = () => {
  const [popup, setPopup] = useState(false);
  return (
    <React.Fragment>
      <Popup
        open={popup}
        content={
          <div className="popup-content">
            <p className="text text--accent shop-popup__title">
              Спасибо за заказ
            </p>
            <p className="text text--primary shop-popup__text">
              Отслеживайте статус вашего заказа в профиле
            </p>
            <Link to="/" className="btn" onClick={() => setPopup(false)}>
              На главную
            </Link>
          </div>
        }
        xButton={true}
        close={() => setPopup(false)}
      />
      <Button onClick={() => setPopup(true)}>Оформить</Button>
    </React.Fragment>
  );
};
