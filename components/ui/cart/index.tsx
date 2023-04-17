import { NextPage } from "next";
import { Products } from "types/product";
import { CardProductCart } from "components/ui/card";
import styles from "./index.module.scss";
import { MouseEventHandler, useEffect, useState } from "react";
import { data } from "data/product";
import { ButtonMain, ButtonSub } from "../button";
import { Close } from "../icons";
import { useAppSelector } from "redux/hook";
import { selectCart, selectCartList } from "redux/action/cart";
interface CartBarProps {
  // data: Products[] | null;
  onClick: MouseEventHandler;
  onClickClose: MouseEventHandler;
  sizeSelected?: string;
  colorSelected?: string;
}

export const CartBar: NextPage<CartBarProps> = ({ onClick, onClickClose }) => {
  const cart = useAppSelector(selectCartList);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(
      cart &&
        cart.reduce(
          (total: any, item: Products) => total + item.priceItem * item.amount,
          0
        )
    );
  }, [cart]);


  return (
    <div className={styles["root"]}>
      <div onClick={onClick} className={styles["background"]}></div>

      <div className={styles["container"]}>
        <h3 className={styles["title"]}>Cart</h3>
        <Close customClass={styles["close"]} onClick={onClickClose} />
        <div className={styles["cart"]}>
          {cart &&
            cart?.length > 0 &&
            cart?.map(
              (
                {
                  nameItem,
                  imgItem,
                  priceItem,
                  urlItem,
                  sizeSelected,
                  colorSelected,
                  amount,
                }: Products,
                index: number
              ) => {
                return (
                  <CardProductCart
                    className={styles["card"]}
                    key={imgItem + nameItem + index}
                    href={`store/${urlItem}`}
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

        <div className={styles["total"]}>
          <h3>Total</h3>
          <p className={styles["price"]}>{totalPrice.toLocaleString()} VND</p>
        </div>
        <div className={styles["checkout"]}>
        <ButtonSub type="submit">Giỏ Hàng</ButtonSub>
          <ButtonMain type="submit">Thanh Toán</ButtonMain>
        </div>
      </div>
    </div>
  );
};
