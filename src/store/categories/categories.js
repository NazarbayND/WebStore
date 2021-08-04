import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    _id: 1,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
  {
    _id: 2,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
  {
    _id: 3,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
  {
    _id: 4,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
  {
    _id: 5,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
  {
    _id: 6,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
  {
    _id: 7,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
  {
    _id: 8,
    name: "Office clothes",
    image: "https://source.unsplash.com/random",
    description: "Shorts Something something ...",
    parent: "2",
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
});
export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
