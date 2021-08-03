import React from "react";
import { SearchForm } from "../forms/SearchForm";
import "./style.css";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav__item nav__primary">
        <p className="text text--primary">Главная</p>
        <p className="text text--primary">Корзина</p>
      </div>
      <div className="nav__item nav__main">
        <p className="text text--accent">Concept</p>
      </div>
      <div className="nav__item nav__secondary">
        <SearchForm />
        <div className="account">
          <p className="text text--primary">Войти</p>
          <UserIcon />
        </div>
      </div>
    </div>
  );
};
