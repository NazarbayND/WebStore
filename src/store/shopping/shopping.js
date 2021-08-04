import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: [
    {
      product: {
        _id: 10,
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
      amount: 1,
    },
  ],
  reducers: {
    AddProduct: (state, action) => {
      state.push(action.payload);
    },
    DeleteProduct: (state, action) => {},
  },
});
export const { increment, decrement } = shoppingSlice.actions;
export default shoppingSlice.reducer;
