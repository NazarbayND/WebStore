import React, { useState } from "react";
import Popup from "../popup/Popup";
import { ReactComponent as QmarkLeft } from "../../assets/qmark-left.svg";
import { ReactComponent as QmarkRight } from "../../assets/qmark-right.svg";

export const InfoButton = ({ position, info }) => {
  const [popup, setPopup] = useState(false);
  return (
    <React.Fragment>
      <Popup
        open={popup}
        content={
          <div className="popup-content">
            <p className="text text--card">{info.title}</p>
            <p className="text text--card">{info.description}</p>
          </div>
        }
        xButton={true}
        close={() => setPopup(false)}
      />
      {position === "left" ? (
        <QmarkLeft
          className="icon--fixed left"
          onClick={() => setPopup(true)}
        />
      ) : (
        <QmarkRight
          className="icon--fixed right"
          onClick={() => setPopup(true)}
        />
      )}
    </React.Fragment>
  );
};
