import { NextPage } from "next";
import { Products } from "types/product";
import { CardProductItem } from "components/ui/card";
import styles from "./index.module.scss";
import { MouseEventHandler } from "react";
import { data } from "data/product";
import { ButtonMain } from "../button";
interface CartBarProps {
  // data: Products[] | null;
  onClick: MouseEventHandler;
}

export const CartBar: NextPage<CartBarProps> = ({ onClick }) => {
  return (
    <div className={styles["root"]}>
      <div onClick={onClick} className={styles["background"]}></div>

      <div className={styles["container"]}>
        <h3 className={styles["title"]}>Cart</h3>
        <div className={styles["cart"]}>
          {data &&
            data?.map(
              (
                { nameItem, imgItem, priceItem, urlItem, sizeItem, colorItem },
                index: number
              ) => {
                return (
                  <CardProductItem
                    className={styles["card"]}
                    key={imgItem + nameItem + index}
                    href={`store/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    sizeItem={sizeItem}
                    colorItem={colorItem}
                    price={priceItem}
                  />
                );
              }
            )}
        </div>

        <div className={styles["total"]}>
          <h3>Total</h3>
          <h3 className={styles["price"]}>20.000.000 VND</h3>
        </div>
        <div className={styles["checkout"]}>
          <ButtonMain type="submit">Checkout</ButtonMain>
        </div>
      </div>
    </div>
  );
};
