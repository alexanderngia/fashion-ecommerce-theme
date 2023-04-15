import { NextPage } from "next";
import { Products } from "types/product";
import { CardProductCart, CardProductItem } from "components/ui/card";
import styles from "./index.module.scss";
import { MouseEventHandler, useEffect, useState } from "react";
import { data } from "data/product";
import { ButtonMain } from "../button";
import { Close } from "../icons";
interface CartBarProps {
  // data: Products[] | null;
  onClick: MouseEventHandler;
  onClickClose: MouseEventHandler;
  cart: Products[];
  sizeSelected?: string;
  colorSelected?: string;
}

export const CartBar: NextPage<CartBarProps> = ({
  onClick,
  onClickClose,
  cart,
  sizeSelected,
  colorSelected,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalPrice(
      cart &&
        cart.reduce(
          (accumulator, current: Products) =>
            accumulator + current.priceItem * current.amount,
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
            cart.length > 0 &&
            cart?.map(
              ({ nameItem, imgItem, priceItem, urlItem }, index: number) => {
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
                  />
                );
              }
            )}
        </div>

        <div className={styles["total"]}>
          <h3>Total</h3>
          <h3 className={styles["price"]}>{totalPrice} VND</h3>
        </div>
        <div className={styles["checkout"]}>
          <ButtonMain type="submit">Checkout</ButtonMain>
        </div>
      </div>
    </div>
  );
};
