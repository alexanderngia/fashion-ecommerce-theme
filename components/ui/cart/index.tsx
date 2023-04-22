import { CardProductCart } from "components/ui/card";
import { NextPage } from "next";
import { MouseEventHandler, useEffect, useState } from "react";
import { selectCartList } from "redux/action/cart";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { Products } from "types/product";
import { ButtonMain } from "../button";
import { Close } from "components/ui/icons";
import styles from "./index.module.scss";
import { removeFromCart } from "redux/action/cart";
import { useRouter } from "next/router";

interface CartBarProps {
  // data: Products[] | null;
  onClick: MouseEventHandler;
  onClickClose: MouseEventHandler;
  sizeSelected?: string;
  colorSelected?: string;
}

export const CartBar: NextPage<CartBarProps> = ({ onClick, onClickClose }) => {
  const cart = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();
  const router = useRouter();

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
                  idItem,
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
                    onClick={() =>
                      dispatch(
                        removeFromCart({ idItem, colorSelected, sizeSelected })
                      )
                    }
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
        <div className={styles["note"]}>
          <p>Đã bao gồm thuế</p>
          <p>Phí ship sẽ được tính khi thanh toán</p>
        </div>
        <div className={styles["total"]}>
          <h3>Total</h3>
          <p className={styles["price"]}>{totalPrice.toLocaleString()} VND</p>
        </div>
        <div className={styles["checkout"]}>
          <ButtonMain
            disabled={cart.length < 0}
            onClick={() => router.push("/cart")}
            type="button"
          >
            Thanh Toán
          </ButtonMain>
        </div>
      </div>
    </div>
  );
};
