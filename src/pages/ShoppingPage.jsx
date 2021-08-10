import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import { ProductsCardExpanded } from "../components/cards/ProductsCardExpanded";
import { ShoppingPopup } from "../components/popup/ShoppingPopup";
import {
  addProduct,
  minusProduct,
  deleteProduct,
  totalAmountAndPrice,
} from "../store/products/products";

export const ShoppingPage = () => {
  const dispatch = useDispatch();
  const shopping = useSelector((state) =>
    state.products.filter((product) => product.amount > 0)
  );
  const total = useSelector((state) => totalAmountAndPrice(state));
  return (
    <div className="page">
      <p className="text text--gray text--center">Корзина</p>
      <div className="shopping-content">
        <div className="shopping__items">
          {shopping[0] ? (
            shopping.map((product) => (
              <ProductsCardExpanded
                key={product._id}
                product={product}
                amount={product.amount}
                handlePlus={() => dispatch(addProduct(product._id))}
                handleMinus={() => dispatch(minusProduct(product._id))}
                handleDelete={() => dispatch(deleteProduct(product._id))}
              />
            ))
          ) : (
            <p className="text text--gray">Shopping Cart is Empty</p>
          )}
        </div>
        <div className="card shopping__card">
          <p className="text text--accent shopping-card__name">Итого</p>
          <p className="text text--primary">{total.amount} вещи</p>
          <p className="text text--primary">Общая сумма {total.price} тг</p>
          <ShoppingPopup />
        </div>
      </div>
    </div>
  );
};
