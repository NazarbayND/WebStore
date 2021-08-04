import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, minusProduct } from "../../store/products/products";
import { ProductsCard } from "../cards/ProductsCard";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  return (
    <div className="grid--3x3">
      {products.map((product) => (
        <ProductsCard
          key={product._id}
          product={product}
          amount={product.amount}
          handlePlus={() => dispatch(addProduct(product._id))}
          handleMinus={() => dispatch(minusProduct(product._id))}
        />
      ))}
    </div>
  );
};
