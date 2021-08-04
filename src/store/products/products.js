import { createSelector, createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    _id: 1,
    amount: 0,
    category: 1,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 2,
    amount: 0,
    category: 1,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 3,
    amount: 0,
    category: 1,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 4,
    amount: 0,
    category: 1,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 5,
    amount: 0,
    category: 1,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 6,
    amount: 0,
    category: 1,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 7,
    amount: 0,
    category: 2,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 8,
    amount: 0,
    category: 2,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 9,
    amount: 0,
    category: 2,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
  {
    _id: 10,
    amount: 0,
    category: 2,
    name: "Рубашка",
    image: "https://source.unsplash.com/random",
    price: 2500,
    duration: "2 дня",
    hint: {
      title: "Рубашка",
      description:
        "А вот так это делается просто берешь и делаешь и делать можно много а можно вообще не делать или делать и делать или не делать и не делать или делать но не сильно",
    },
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.findIndex((obj) => obj._id === action.payload);
      state[index].amount += 1;
    },
    minusProduct: (state, action) => {
      const index = state.findIndex((obj) => obj._id === action.payload);
      if (state[index].amount === 0) return;
      state[index].amount -= 1;
    },
    deleteProduct: (state, action) => {
      const index = state.findIndex((obj) => obj._id === action.payload);
      state[index].amount = 0;
    },
  },
});

export const totalAmountAndPrice = createSelector(
  (state) => state,
  (state) =>
    state.products.reduce(
      (acc, product) => {
        if (product.amount > 0) {
          acc.amount += product.amount;
          acc.price += product.price * product.amount;
        }
        return acc;
      },
      {
        amount: 0,
        price: 0,
      }
    )
);

export const { addProduct, minusProduct, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
