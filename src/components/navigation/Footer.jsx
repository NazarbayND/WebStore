import React from "react";
import { ReactComponent as WhatAppIcon } from "../../assets/whatsapp.svg";
import { ReactComponent as FaceBookIcon } from "../../assets/facebook.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/youtube.svg";

export const Footer = () => {
  return (
    <div className="footer__background">
      <div className="nav-bar">
        <div className="nav__item nav__primary">
          <p className="text text--accent">Concept</p>
        </div>
        <div className="nav__item nav__main">
          <div className="social-media">
            <WhatAppIcon />
            <FaceBookIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className="nav__item nav__secondary">
          <p className="text text--primary">+7 (708) 380 70 09</p>
        </div>
      </div>
    </div>
  );
};
