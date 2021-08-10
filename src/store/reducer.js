import { combineReducers } from "redux";
import counter from "./user/counter";
import categories from "./categories/categories";
import products from "./products/products";

export default combineReducers({ counter, categories, products });
