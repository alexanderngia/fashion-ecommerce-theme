import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import { Products } from "types/product";

export interface CartState {
  list: Products[];
  cartToggle: boolean;
}

const initialState: CartState = {
  list: [],
  cartToggle: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleCartToggle: (state: CartState) => {
      state.cartToggle = !state.cartToggle;
    },
    increaseQuantityItem: (
      state: CartState,
      action: PayloadAction<{
        idItem: string;
        sizeItem: string;
        colorItem: string;
      }>
    ) => {
      const { idItem, sizeItem, colorItem } = action.payload;
      const exist = state.list.find(
        (item) =>
          item.idItem === idItem &&
          item.colorSelected === colorItem &&
          item.sizeSelected === sizeItem
      );
      if (exist)
        if (exist.amount < exist.qualityItem) {
          exist.amount++;
        } else {
          exist.amount === exist.qualityItem;
        }
    },
    decreaseQuantityItem: (
      state: CartState,
      action: PayloadAction<{
        idItem: string;
        sizeItem: string;
        colorItem: string;
      }>
    ) => {
      const { idItem, sizeItem, colorItem } = action.payload;
      const exist = state.list.find(
        (item) =>
          item.idItem === idItem &&
          item.colorSelected === colorItem &&
          item.sizeSelected === sizeItem
      );
      if (exist)
        if (exist.amount > 1) {
          exist.amount--;
        }
    },
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
      state.cartToggle = !state.cartToggle;
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

export const {
  addToCart,
  removeFromCart,
  handleCartToggle,
  decreaseQuantityItem,
  increaseQuantityItem,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartList = (state: RootState) => state.cart.list;
export const selectCartToggle = (state: RootState) => state.cart.cartToggle;

export default cartSlice.reducer;
