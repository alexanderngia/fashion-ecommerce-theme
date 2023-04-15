import LayoutProduct from "components/container/layout/product";
import { ButtonMain } from "components/ui/button";
import Divider from "components/ui/divider";
import { data } from "data/store";
import {
  getProductByCategory,
  getProductBySlug,
  getProductPath,
} from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import router from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Products } from "types/product";

import { headerLayouts } from "@/components/container/header";
import InputColor from "@/components/ui/form/input/color";
import InputNumber from "@/components/ui/form/input/number";
import InputSize from "@/components/ui/form/input/size";
import Img from "@/components/ui/img";
import { ReturnUpBack } from "@styled-icons/ionicons-outline/ReturnUpBack";

import styles from "./[slug].module.scss";
import classnames from "classnames";

interface SingleProductProps {
  product: Products;
  // productCategory: Products;
}
interface SelectedOption {
  colorSelected: string;
  sizeSelected: string;
}
const SingleProduct: NextPage<SingleProductProps> = ({
  product,
  // productCategory,
}) => {
  // const similarList = productCategory?.filter(
  //   ({ id }: Products) => id !== product.id
  // );
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption>({
    colorSelected: "",
    sizeSelected: "",
  });
  const [cart, setCart] = useState<any[]>([]);
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;

  const handleAddToCart = (product: Products, selectedOptions: any) => {
    setCart((prev): Products[] => {
      const exist = prev.find((x: Products) => x.id === product.id);
      if (exist) {
        return prev.map((item) => {
          if (item.id === product.id) {
            if (item.amount < item.qualityItem) {
              return { ...item, amount: item.amount + 1, ...selectedOptions };
            } else {
              return { ...item, amount: item.qualityItem, ...selectedOptions };
            }
          } else {
            return item;
          }
        });
      }

      return [...prev, { ...product, amount: 1 }];
    });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      colorSelected: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      sizeSelected: event.target.value,
    });
    console.log(event.target.value);
  };

  // const handleAddToCart = (product: Products, options: any) => {
  // const index = cart.find(({ id }: Products) => id === product.id);
  // if (index !== -1) {
  //   cart[index].amount += cart[index].amount;
  // } else {
  //   cart.push({ product, options });
  // }
  //   console.log(product, options, " options");
  // };
  // const handleRemoveFromCart = (product: Products) => {
  //   setCart((cart): Products[] => {
  //     return cart.map((item) => {
  //       if (item.id === product.id) {
  //         if (item.amount > 1) {
  //           return { ...item, amount: item.amount - 1 };
  //         } else {
  //           return setCart(cart.filter((x) => x.id !== product.id));
  //         }
  //       }
  //       return item;
  //     });
  //   });
  // };
  return (
    <>
      <HeaderLayout cart={cart} data={data.nav} layout={layout}></HeaderLayout>
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
                  {product.priceItem?.toLocaleString()} vnd
                </p>

                {product.colorItem && (
                  <div className={styles["row"]}>
                    <InputColor
                      listColor={product.colorItem}
                      onChange={handleColorChange}
                    />
                  </div>
                )}

                {product.sizeItem && (
                  <div className={styles["row"]}>
                    <InputSize
                      listSize={product.sizeItem}
                      onChange={handleSizeChange}
                    />
                  </div>
                )}
                <div className={styles["cta"]}>
                  {/* <InputNumber className={styles["qty"]} /> */}
                  <ButtonMain
                    disabled={
                      !selectedOptions.colorSelected ||
                      !selectedOptions.sizeSelected
                    }
                    onClick={() => handleAddToCart(product, selectedOptions)}
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
          <div className={styles["product-des"]}>
            <h2>Description</h2>
          </div>
          <div className={styles["ingredient"]}>
            <h2>Ingredient</h2>
          </div>
          <div className={styles["good-to-know"]}>
            <h2>Good To Know</h2>
          </div>
          {/* {similarList && (
            <div className={styles["similar"]}>
              <h2>Similar</h2>
              <div className={styles["container"]}>
                <CarouselProduct
              type="product"
              list={similarList}
              classCard={styles["similarCard"]}
            />
              </div>
            </div>
          )} */}
        </div>
      </LayoutProduct>
    </>
  );
};
export default SingleProduct;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;
  const product = await getProductBySlug(slug);
  const id = product?.idItem;
  // const productCategory = await getProductByCategory(product.categoryItem);

  return {
    props: {
      product,
      id,
      // productCategory,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getProductPath();

  return { paths, fallback: false };
};
