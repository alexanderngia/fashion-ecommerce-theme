import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import { Products } from "types/product";
import { stringify } from "querystring";

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
          item.id === product.id &&
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
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartList = (state: RootState) => state.cart.list;

export default cartSlice.reducer;
