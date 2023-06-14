import LayoutProduct from "components/container/layout/product";
import { ButtonMain } from "components/ui/button";
import Divider from "components/ui/divider";
import { data } from "data/store";
import {
  getProductBySlug,
  getProductPath,
  getProducts,
} from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import router from "next/dist/client/router";
import { useState } from "react";
import { addToCart } from "redux/action/cart";
import { useAppDispatch } from "redux/hook";
import { Products } from "types/product";

import { CarouselProduct } from "@/components/container/carousel";
import { headerLayouts } from "@/components/container/header";
import Img from "@/components/ui/img";
import InputColor from "@/components/ui/input/color";
import InputSize from "@/components/ui/input/size";
import { ReturnUpBack } from "@styled-icons/ionicons-outline/ReturnUpBack";

import styles from "./[slug].module.scss";

interface SingleProductProps {
  product: Products;
  productList: Products[];
}

const SingleProduct: NextPage<SingleProductProps> = ({
  product,
  productList,
}) => {
  const [colorSelected, setColorSelected] = useState<string>("");
  const [sizeSelected, setSizeSelected] = useState<string>("");
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const dispatch = useAppDispatch();

  const handleAddToCart = (
    product: Products,
    colorSelected: string,
    sizeSelected: string
  ) => {
    dispatch(addToCart({ product, colorSelected, sizeSelected }));
  };
  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutProduct>
        <div className={styles["root"]}>
          <div className={styles["product"]}>
            <div className={styles["col"]}>
              <ReturnUpBack
                onClick={() => router.back()}
                size={30}
                className={styles["back"]}
              />

              <div className={styles["box"]}>
                <p className={styles["subTitle"]}>
                  Product from {product.categoryItem}
                </p>
                <h1>{product.nameItem}</h1>

                <p className={styles["price"]}>
                  {product.priceItem
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  vnd
                </p>

                {product.colorItem && (
                  <div className={styles["row"]}>
                    <InputColor
                      listColor={product.colorItem}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setColorSelected(event.target.value)
                      }
                    />
                  </div>
                )}

                {product.sizeItem && (
                  <div className={styles["row"]}>
                    <InputSize
                      listSize={product.sizeItem}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSizeSelected(event.target.value)
                      }
                    />
                  </div>
                )}
                <div className={styles["cta"]}>
                  <ButtonMain
                    disabled={!colorSelected || !sizeSelected}
                    onClick={() =>
                      handleAddToCart(product, colorSelected, sizeSelected)
                    }
                  >
                    Add to cart
                  </ButtonMain>
                </div>
              </div>
              <div className={styles["box"]}>
                <div className={styles["img"]}>
                  <Img priority alt={product.nameItem} src={product.imgItem} />
                </div>
              </div>
            </div>
            <div className={styles["col"]}>
              <h2>Product description</h2>
              <span
                dangerouslySetInnerHTML={{ __html: product.bodyHtmlItem }}
              />
              <Divider />
            </div>
          </div>
          <div className={styles["row"]}>
            <h2>Detail</h2>
            <span dangerouslySetInnerHTML={{ __html: product.bodyHtmlItem }} />
          </div>
          {/* <Divider />
          <div className={styles["row"]}>
            <h2>Ingredient</h2>
          </div>
          <Divider />
          <div className={styles["row"]}>
            <h2>Good To Know</h2>
          </div> */}
          <Divider />
          {productList && (
            <div className={styles["row"]}>
              <h2>Similar</h2>
              <CarouselProduct
                customCont={styles["carousel"]}
                data={productList}
                customArrow={styles["pagination"]}
              />
            </div>
          )}
        </div>
      </LayoutProduct>
    </>
  );
};
export default SingleProduct;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, category }: any = params;

  const product = await getProductBySlug(`/store/${category}/${slug}`);
  const productList = await getProducts();
  return {
    props: {
      productList,
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getProductPath();
  return { paths, fallback: false };
};
