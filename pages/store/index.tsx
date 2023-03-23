import LayoutStore from "components/container/layout/store";
import { ButtonSub } from "components/ui/button";
import { CardProduct } from "components/ui/card";
import Filter from "components/ui/filter";
import { getProducts } from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { IText } from "types/layout";
import { Product } from "types/product";

import { headerLayouts } from "@/components/container/header";
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";

import { getStoreData } from "lib/pageService";
import styles from "./index.module.scss";

interface StoreProps {
  data: StoreData;
  product: Product[];
}

interface StoreData {
  nav: IText[];
  title: string;
}
const Store: NextPage<StoreProps> = ({ data, product }) => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);

  const router = useRouter();
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;

  const onToggleSearch = async () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutStore>
        <div className={styles["function"]}>
          <div className={styles["column"]}>
            <h1>{data.title}</h1>
            <p>
              {router.asPath}/<span>{data.title}</span>
            </p>
          </div>
          <div className={styles["column"]}>
            {searchToggle && <input type="text" />}
            <Filter
              onClick={onToggleSearch}
              title="Search"
              iconFilter={<SearchOutline />}
            />
            <Filter title="Price" iconFilter={<AngleDown />} />
            <Filter title="Color" iconFilter={<AngleDown />} />
            <Filter title="Size" iconFilter={<AngleDown />} />
          </div>
        </div>
        <div className={styles["container"]}>
          {product &&
            product.map(
              ({ nameItem, urlItem, imgItem, priceItem }, index: number) => {
                return (
                  <CardProduct
                    key={nameItem + urlItem + index}
                    href={`/store/${urlItem}`}
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
  const data = await getStoreData();
  const product = await getProducts();
  return {
    props: {
      data,
      product,
    },
  };
};
