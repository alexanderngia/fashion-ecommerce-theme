import LayoutProduct from "components/container/layout/product";
import { ButtonMain } from "components/ui/button";
import Divider from "components/ui/divider";
import InputNumber from "components/ui/form/input";
import { getStoreData } from "lib/pageService";
import {
  getProductByCategory,
  getProductBySlug,
  getProductPath,
} from "lib/productService";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { IText } from "types/layout";
import { Product } from "types/product";

import { headerLayouts } from "@/components/container/header";
import Img from "@/components/ui/img";
import { ReturnUpBack } from "@styled-icons/ionicons-outline/ReturnUpBack";

import styles from "./[slug].module.scss";

interface SingleProductProps {
  nav: IText[];
  product: Product;
  productCategory: Product;
}

const SingleProduct: NextPage<SingleProductProps> = ({
  product,
  productCategory,
  nav,
}) => {
  const similarList = productCategory?.filter(
    ({ id }: Product) => id !== product.id
  );
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const addToCart = () => {};

  return (
    <>
      <HeaderLayout data={nav} layout={layout}></HeaderLayout>
      <LayoutProduct>
        <div className={styles["root"]}>
          <div className={styles["product"]}>
            <div className={styles["col"]}>
              <Link href={"/store"}>
                <ReturnUpBack
                  // onClick={() => router.back()}
                  size={30}
                  className={styles["back"]}
                />
              </Link>

              <div className={styles["box"]}>
                <p className={styles["subTitle"]}>
                  Product from {product.categoryItem}
                </p>
                <h1>{product.nameItem}</h1>
                <span
                  dangerouslySetInnerHTML={{ __html: product.bodyHtmlItem }}
                />
                <p className={styles["price"]}>
                  {product.priceItem?.toLocaleString()} vnd
                </p>
                <div className={styles["cta"]}>
                  <InputNumber className={styles["qty"]} />
                  <ButtonMain onClick={addToCart}> Add to cart </ButtonMain>
                </div>
              </div>
              <div className={styles["box"]}>
                <div className={styles["img"]}>
                  <Img
                    alt={product.nameItem}
                    src={product.imgItem}
                    width={90}
                    height={105}
                  />
                </div>
              </div>
            </div>
            <div className={styles["col"]}>
              <h3>Product description</h3>
              <span
                dangerouslySetInnerHTML={{ __html: product.bodyHtmlItem }}
              />
              <Divider />
              {product.sizeItem && (
                <>
                  <div className={styles["box"]}>
                    <p>Size:</p>
                    <span className={styles["size"]}>{product.sizeItem}</span>
                  </div>
                  <Divider />
                </>
              )}
              {product.colorItem && (
                <div className={styles["box"]}>
                  <p>Color:</p>
                  <span
                    className={styles["color"]}
                    style={{ backgroundColor: `${product.colorItem}` }}
                  ></span>
                </div>
              )}
            </div>
          </div>
          <div className={styles["product-des"]}>
            <h2>Description</h2>
          </div>
          <div className={styles["ingredient"]}>
            <h2>Ingredient</h2>
          </div>
          <div className={styles["good-to-know"]}>
            <h2>Good To Know</h2>
          </div>
          {similarList && (
            <div className={styles["similar"]}>
              <h2>Similar</h2>
              <div className={styles["container"]}>
                {/* <CarouselProduct
              type="product"
              list={similarList}
              classCard={styles["similarCard"]}
            /> */}
              </div>
            </div>
          )}
        </div>
      </LayoutProduct>
    </>
  );
};
export default SingleProduct;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const data = await getStoreData();
  const { nav } = data;
  const product = await getProductBySlug(slug);
  const productCategory = await getProductByCategory(product.categoryItem);

  return {
    props: {
      nav,
      product,
      productCategory,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getProductPath();

  return { paths, fallback: false };
};
