import { combineReducers } from "redux";
import counter from "./user/counter";
import categories from "./categories/categories";
import products from "./products/products";
import shopping from "./shopping/shopping";

export default combineReducers({ counter, categories, products, shopping });
