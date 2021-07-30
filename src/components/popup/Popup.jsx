import React from "react";

import "./style.css";

const Popup = ({ open, close, content, xButton }) => {
  return (
    <div className="popup">
      <div className={open ? "popup__box active" : "popup__box"}>
        {xButton && <div className="" onClick={close}></div>}
        <div className="popup__content">{content}</div>
      </div>
      <div
        className={open ? "popup__overlay active" : "popup__overlay"}
        onClick={close}
      ></div>
    </div>
  );
};

export default Popup;
