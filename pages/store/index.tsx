import LayoutStore from "components/container/layout/store";
import { ButtonSub } from "components/ui/button";
import { CardProduct } from "components/ui/card";
import Filter from "components/ui/filter";
import { getProducts } from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { data } from "data/store";
import { Products } from "types/product";

import { headerLayouts } from "@/components/container/header";

import styles from "./index.module.scss";
import { useState } from "react";
import InputColor from "@/components/ui/input/color";
import Divider from "@/components/ui/divider";
import InputSize from "@/components/ui/input/size";

interface StoreProps {
  product: Products[];
}
const Store: NextPage<StoreProps> = ({ product }) => {
  const router = useRouter();
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const [filteredProducts, setFilteredProducts] = useState<Products[]>(product);
  const [toggle, setToggle] = useState<boolean>(false);

  const variantFilter = {
    size: ["S", "M", "L", "XL"],
    color: ["#444444", "#19c37d", "#6e6e80", "#ef4146"],
  };

  const filterBySize = (selectedSize: string) => {
    const filtered = product.filter((product) => {
      return product.sizeItem.includes(selectedSize);
    });
    setFilteredProducts(filtered);
  };

  const filterByColor = (selectedColor: string) => {
    const filtered = product.filter((product) => {
      return product.colorItem.includes(selectedColor);
    });
    setFilteredProducts(filtered);
  };

  const filterByPrice = (selectedPrice: number) => {
    const filtered = product.filter(
      (product) => product.price <= selectedPrice
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutStore>
        {toggle && (
          <div className={styles["containerFilter"]}>
            <div
              onClick={() => setToggle(false)}
              className={styles["filterBg"]}
            ></div>
            <div className={styles["filterModal"]}>
              <h3>Filter</h3>
              <Divider classname={styles["divider"]} />
              <div className={styles["row"]}>
                <h4>Size</h4>
                <InputSize
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    filterBySize(event.target.value);
                  }}
                  listSize={variantFilter.size}
                />
              </div>
              <Divider classname={styles["divider"]} />
              <div className={styles["row"]}>
                <h4>Color</h4>
                <InputColor
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    filterByColor(event.target.value);
                  }}
                  listColor={variantFilter.color}
                />
              </div>
              {/* <Divider />

                <div className={styles["row"]}>
                  <h4>Price</h4>
                  <InputPriceRange />
                </div> */}
            </div>
          </div>
        )}
        <div className={styles["function"]}>
          <div className={styles["column"]}>
            <h1>{data.title}</h1>
            <p>
              <span>{router.asPath}</span>
            </p>
          </div>
          <div className={styles["column"]}>
            <Filter onClick={() => setToggle(!toggle)} title="Filter" />
          </div>
        </div>
        <div className={styles["container"]}>
          {filteredProducts &&
            filteredProducts.map(
              (
                { nameItem, urlItem, imgItem, priceItem, categoryItem },
                index: number
              ) => {
                return (
                  <CardProduct
                    classThumb={styles["cardThumb"]}
                    className={styles["card"]}
                    key={nameItem + urlItem + index}
                    href={`/store/${categoryItem}/${urlItem}`}
                    title={nameItem}
                    image={imgItem}
                    price={priceItem}
                  />
                );
              }
            )}
        </div>
        <div className={styles["btn-load"]}>
          <ButtonSub type="button">LOAD MORE</ButtonSub>
        </div>
      </LayoutStore>
    </>
  );
};
export default Store;

export const getStaticProps: GetStaticProps = async () => {
  const product = await getProducts();
  return {
    props: {
      product,
    },
  };
};
