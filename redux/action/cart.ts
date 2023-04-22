import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import { Products } from "types/product";

export interface CartState {
  list: Products[];
}

const initialState: CartState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{
        product: Products;
        colorSelected: string;
        sizeSelected: string;
      }>
    ) => {
      const { product, colorSelected, sizeSelected } = action.payload;
      const exist = state.list.find(
        (item) =>
          item.idItem === product.idItem &&
          item.colorSelected === colorSelected &&
          item.sizeSelected === sizeSelected
      );
      if (exist) {
        if (exist.amount < product.qualityItem) {
          exist.amount++;
        } else {
          exist.amount === product.qualityItem;
        }
        localStorage.setItem("CART", JSON.stringify(state.list));
      } else {
        state.list.push({
          ...product,
          colorSelected,
          sizeSelected,
          amount: 1,
        });
        localStorage.setItem("CART", JSON.stringify(state.list));
      }
    },
    removeFromCart: (
      state: CartState,
      action: PayloadAction<{
        idItem: string;
        colorSelected: string;
        sizeSelected: string;
      }>
    ) => {
      const { idItem, colorSelected, sizeSelected } = action.payload;
      const exist = state.list.find(
        (item) =>
          item.idItem === idItem &&
          item.colorSelected === colorSelected &&
          item.sizeSelected === sizeSelected
      );
      if (exist)
        if (exist.amount > 1) {
          exist.amount--;
        } else {
          state.list = state.list.filter(
            (items: Products) =>
              items.idItem !== idItem ||
              items.colorSelected !== colorSelected ||
              items.sizeSelected !== sizeSelected
          );
        }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartList = (state: RootState) => state.cart.list;

export default cartSlice.reducer;
