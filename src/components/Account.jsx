import React, { useState } from "react";
import Popup from "./popup/Popup";
import { ReactComponent as UserIcon } from "../assets/user.svg";

export const Account = () => {
  const [popup, setPopup] = useState(false);

  return (
    <React.Fragment>
      <Popup
        open={popup}
        content={
          <div className="popup-content">
            <p className="text text--primary">Профиль Nursultannd</p>
            <div className="notifications">
              <p className="text text--primary">Уведомления</p>
              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <button className="btn--danger">Выйти</button>
          </div>
        }
        xButton={true}
        close={() => setPopup(false)}
      />
      <div className="account" onClick={() => setPopup(true)}>
        <p className="text text--primary">Войти</p>
        <UserIcon />
      </div>
    </React.Fragment>
  );
};
