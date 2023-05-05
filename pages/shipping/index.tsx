import LayoutStore from "components/container/layout/store";
import { ButtonMain, ButtonSub } from "components/ui/button";
import {
  CardProduct,
  CardProductCart,
  CardProductCartQuantity,
  CardProductItem,
} from "components/ui/card";
import Filter from "components/ui/filter";
import { data } from "data/store";
import { getProducts } from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import {
  addToCart,
  updateCart,
  removeFromCart,
  selectCartList,
} from "redux/action/cart";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { Products } from "types/product";

import { headerLayouts } from "@/components/container/header";
import Divider from "@/components/ui/divider";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

interface ShippingProps {
  product: Products[];
}
const Shipping: NextPage<ShippingProps> = () => {
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const cart = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();
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
  }, []);
  useEffect(() => {
    setTotalPrice(
      cart &&
        cart.reduce(
          (total: any, item: Products) => total + item.priceItem * item.amount,
          0
        ) * 1.1
    );
  }, [cart]);
  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutStore>
        <h1 className={styles["title"]}>Giỏ Hàng</h1>
        <div className={styles["container"]}>
          <div className={styles["cart"]}>
            <div className={styles["title"]}>
              <h4>ITEMS</h4>
              <h4>SỐ LƯỢNG</h4>
              <h4>GIÁ TIỀN</h4>
            </div>

            <Divider />
            <div className={styles["cartList"]}>
              <div className={styles["cartListItem"]}>
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
                        <CardProductCartQuantity
                          onClick={() =>
                            dispatch(
                              removeFromCart({
                                idItem,
                                colorSelected,
                                sizeSelected,
                              })
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
                          idItem={idItem}
                        />
                      );
                    }
                  )}
              </div>
            </div>
          </div>
          <div className={styles["sidebar"]}>
            <div className={styles["total"]}>
              <h4>TỔNG</h4>
              <p>
                <strong>{totalPrice.toLocaleString()} VND</strong>
              </p>
            </div>
            <div className={styles["tax"]}>
              <p>
                <strong>Đã bao gồm thuế 10%</strong>
              </p>
              <p>Phí ship sẽ được tính khi thanh toán</p>
            </div>
            <textarea className={styles["note"]} placeholder="Ghi chú" />
            <ButtonMain onClick={() => console.log(cart, "cart current")}>
              Đặt Hàng
            </ButtonMain>
          </div>
        </div>
      </LayoutStore>
    </>
  );
};
export default Shipping;

export const getStaticProps: GetStaticProps = async () => {
  const product = await getProducts();
  return {
    props: {
      product,
    },
  };
};
