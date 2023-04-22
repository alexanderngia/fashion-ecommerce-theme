import LayoutStore from "components/container/layout/store";
import { ButtonSub } from "components/ui/button";
import { CardProduct, CardProductItem } from "components/ui/card";
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
import { removeFromCart, selectCartList } from "redux/action/cart";

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
                  <CardProductItem
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
