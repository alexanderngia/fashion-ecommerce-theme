import { CardProductCart } from "components/ui/card";
import { NextPage } from "next";
import { MouseEventHandler, useEffect, useState } from "react";
import {
  handleCartToggle,
  selectCartList,
  updateCart,
} from "redux/action/cart";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { Products } from "types/product";
import { ButtonMain, ButtonSub } from "../../ui/button";
import { Close } from "components/ui/icons";
import styles from "./index.module.scss";
import { removeFromCart } from "redux/action/cart";
import { useRouter } from "next/router";

interface CartBarProps {
  // data: Products[] | null;
  onClick: MouseEventHandler;
  sizeSelected?: string;
  colorSelected?: string;
}

export const CartBar: NextPage<CartBarProps> = ({ onClick }) => {
  const cart = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const getFromLocalStorage = (key: string) => {
      if (!key || typeof window === "undefined") {
        return "";
      }
      return localStorage.getItem(key);
    };
    dispatch(
      updateCart(
        getFromLocalStorage("CART")
          ? JSON.parse(getFromLocalStorage("CART") || "{}")
          : []
      )
    );
  }, [dispatch]);

  useEffect(() => {
    const totalCart = cart.reduce(
      (total: any, item: Products) => total + item.priceItem * item.amount,
      0
    );
    setTotalPrice(totalCart);
  }, [cart]);

  return (
    <div className={styles["root"]}>
      <div onClick={onClick} className={styles["background"]}></div>

      <div className={styles["container"]}>
        <h3 className={styles["title"]}>Cart</h3>
        <Close customClass={styles["close"]} onClick={onClick} />
        <div className={styles["cart"]}>
          {cart &&
            cart?.length > 0 &&
            cart?.map(
              (
                {
                  idItem,
                  nameItem,
                  imgItem,
                  priceItem,
                  urlItem,
                  sizeSelected,
                  colorSelected,
                  categoryItem,
                  amount,
                }: Products,
                index: number
              ) => {
                return (
                  <CardProductCart
                    onClick={() =>
                      dispatch(
                        removeFromCart({ idItem, colorSelected, sizeSelected })
                      )
                    }
                    key={imgItem + nameItem + index}
                    href={`/store/${categoryItem}/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    sizeItem={sizeSelected}
                    colorItem={colorSelected}
                    price={priceItem}
                    qualityItem={amount}
                  />
                );
              }
            )}
        </div>
        <div className={styles["note"]}>
          <p>
            <strong>Chưa bao gồm thuế VAT</strong>
          </p>
          <p>Phí ship sẽ được tính khi thanh toán</p>
        </div>
        <div className={styles["total"]}>
          <h3>Total</h3>
          <p className={styles["price"]}>
            {totalPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND
          </p>
        </div>
        <div className={styles["checkout"]}>
          <ButtonSub
            disabled={cart.length < 0}
            onClick={() => {
              dispatch(handleCartToggle());
              router.push("/cart");
            }}
            type="button"
          >
            Giỏ Hàng
          </ButtonSub>
          <ButtonMain
            disabled={cart.length < 0}
            onClick={() => {
              dispatch(handleCartToggle());
              router.push("/cart");
            }}
            type="button"
          >
            Thanh Toán
          </ButtonMain>
        </div>
      </div>
    </div>
  );
};
