import LayoutStore from "components/container/layout/store";
import { ButtonMain, ButtonSub } from "components/ui/button";
import {
  CardProduct,
  CardProductCart,
  CardProductItem,
} from "components/ui/card";
import Filter from "components/ui/filter";
import { getProducts } from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { data } from "data/store";
import { Products } from "types/product";

import { headerLayouts } from "@/components/container/header";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";

import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { addToCart, removeFromCart, selectCartList } from "redux/action/cart";
import Divider from "@/components/ui/divider";

interface CartProps {
  product: Products[];
}
const Cart: NextPage<CartProps> = () => {
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const cart = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();
  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutStore>
        <h1 className={styles["title"]}>Giỏ Hàng</h1>
        <div className={styles["container"]}>
          <div className={styles["cart"]}>
            <h4>ITEMS</h4>
            <Divider />
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
                    />
                  );
                }
              )}
          </div>
          <div className={styles["sidebar"]}>
            <div className={styles["total"]}>
              <h4>TỔNG</h4>
              <p>
                <strong>20000000 VND</strong>
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
              Thanh toán
            </ButtonMain>
          </div>
        </div>
      </LayoutStore>
    </>
  );
};
export default Cart;

export const getStaticProps: GetStaticProps = async () => {
  const product = await getProducts();
  return {
    props: {
      product,
    },
  };
};
