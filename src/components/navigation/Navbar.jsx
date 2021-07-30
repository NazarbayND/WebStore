import React from "react";
import { SearchForm } from "../forms/SearchForm";
import "./style.css";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav__item">
        <p className="text text--primary">Главная</p>
      </div>
      <div className="nav__item">
        <p className="text text--primary">Корзина</p>
      </div>
      <div className="nav__item concept">
        <p className="text text--accent">Concept</p>
      </div>
      <div className="nav__item">
        <SearchForm />
      </div>
      <div className="nav__item ">
        <p className="text text--primary">Войти</p>
      </div>
    </div>
  );
};
