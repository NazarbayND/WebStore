import React from "react";
import { SearchForm } from "../forms/SearchForm";
import "./style.css";

import { NavLink } from "react-router-dom";
import { Account } from "../Account";
import { useSelector } from "react-redux";
import { totalAmountAndPrice } from "../../store/products/products";

export const Navbar = () => {
  const total = useSelector((state) => totalAmountAndPrice(state));
  return (
    <React.Fragment>
      <div className="nav-bar">
        <div className="nav__item nav__primary">
          <NavLink
            to="/home"
            className="text text--nav"
            activeClassName="nav--selected"
          >
            Главная
          </NavLink>
          <NavLink
            to="/shopping"
            className="text text--nav"
            activeClassName="nav--selected"
          >
            Корзина{total.amount > 0 && `(${total.amount})`}
          </NavLink>
        </div>
        <div className="nav__item nav__main">
          <p className="text text--accent">Concept</p>
        </div>
        <div className="nav__item nav__secondary">
          <SearchForm />
          <Account />
        </div>
      </div>
    </React.Fragment>
  );
};
