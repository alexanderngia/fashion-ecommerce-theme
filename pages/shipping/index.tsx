import LayoutStore from "components/container/layout/store";
import { ButtonMain } from "components/ui/button";
import { CardProductCartSub } from "components/ui/card";
import { data } from "data/store";
import { getProducts } from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import { updateCart, removeFromCart, selectCartList } from "redux/action/cart";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { Products } from "types/product";

import { headerLayouts } from "@/components/container/header";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.scss";
import InputText from "components/ui/input";
import classnames from "classnames";
import Divider from "@/components/ui/divider";
import InputPayment from "@/components/ui/input/payment";
import { CreditCard, Dollar, Right, Tablet } from "@/components/ui/icons";
import InputSelect from "@/components/ui/input/select";

interface ShippingProps {
  product: Products[];
}
interface ShippingForm {
  phone: string;
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  payment: string;
  city: string;
  code_city: string;
}
const Shipping: NextPage<ShippingProps> = () => {
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const cart = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [note, setNote] = useState<string>("");

  const [formValues, setFormValues] = useState<ShippingForm>({
    phone: "",
    email: "",
    country: "Việt Nam",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    code_city: "",
    payment: "COD",
  });
  const country = [{ name: "Việt Nam" }];
  useEffect(() => {
    console.log(formValues, "form");
  }, [formValues]);

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
    setNote(
      getFromLocalStorage("NOTE_CART")
        ? JSON.parse(getFromLocalStorage("NOTE_CART") || "")
        : ""
    );
  }, [dispatch]);

  useEffect(() => {
    setTotalPrice(
      cart &&
        cart.reduce(
          (total: any, item: Products) => total + item.priceItem * item.amount,
          0
        ) * 1.1
    );
  }, [cart, setTotalPrice]);
  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutStore>
        <h1 className={styles["title"]}>VẬN CHUYỂN</h1>
        <div className={styles["container"]}>
          <div className={styles["main"]}>
            <div className={styles["row"]}>
              <h4>THÔNG TIN LIÊN HỆ / CONTACT</h4>
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, phone: e.target.value });
                }}
                classname={styles["col-4"]}
                placeholder="Điện Thoại"
                type="text"
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, email: e.target.value });
                }}
                classname={styles["col-4"]}
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <div className={styles["row"]}>
              <h4>ĐỊA CHỈ GIAO HÀNG / INFORMATION</h4>

              <InputSelect
                name="country"
                id="country"
                value={country}
                arrow={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, country: e.target.value });
                }}
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, firstName: e.target.value });
                }}
                classname={styles["col-4"]}
                placeholder="Tên"
                type="text"
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, lastName: e.target.value });
                }}
                classname={styles["col-4"]}
                placeholder="Họ"
                type="text"
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, address: e.target.value });
                }}
                placeholder="Địa Chỉ"
                type="text"
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, city: e.target.value });
                }}
                classname={styles["col-4"]}
                placeholder="Thành phố"
                type="text"
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, code_city: e.target.value });
                }}
                classname={styles["col-4"]}
                placeholder="Postal Code"
                type="text"
              />
            </div>
            <div className={styles["row"]}>
              <h4>PHƯƠNG THỨC THANH TOÁN / PAYMENT METHOD</h4>
              <InputPayment
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, payment: e.target.value });
                }}
                id="COD"
                value="COD"
                subLabel="Thanh toán ngay khi nhận hàng"
                label="COD"
                name="payment"
                defaultChecked
                required
              >
                <Dollar />
              </InputPayment>
              <InputPayment
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, payment: e.target.value });
                }}
                id="BT"
                value="BANK TRANSFER"
                subLabel="Chuyển khoản ngân hàng"
                label="BANK TRANSFER"
                arrow={true}
                name="payment"
                required
              >
                <Right />
              </InputPayment>
              <InputPayment
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, payment: e.target.value });
                }}
                id="MOMO"
                value="MOMO"
                subLabel="Thanh toán bằng ví điện tử"
                label="MOMO"
                name="payment"
                arrow={true}
                required
              >
                <Tablet />
              </InputPayment>
              <InputPayment
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, payment: e.target.value });
                }}
                id="VISA/MASTERCARD"
                value="VISA/MASTERCARD"
                subLabel="Thanh toán bằng thẻ ngân hàng"
                label="Visa / Mastercard"
                name="payment"
                arrow={true}
                required
              >
                <CreditCard />
              </InputPayment>
            </div>
          </div>
          <div className={styles["sidebar"]}>
            <div className={styles["row"]}>
              <div className={styles["cart"]}>
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
                            <CardProductCartSub
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
                </div>
              </div>
            </div>
            <div className={styles["row"]}>
              <div className={classnames(styles["coupon"], styles["sub-row"])}>
                <InputText
                  classname={styles["input"]}
                  placeholder="Thẻ quà tặng hoặc mã giảm giá"
                  type="text"
                />
                <ButtonMain className={styles["button"]}>Áp Dụng</ButtonMain>
              </div>
              <div className={classnames(styles["note"], styles["sub-row"])}>
                <h4>Ghi Chú</h4>
                <p>{note}</p>
              </div>

              <div
                className={classnames(styles["subTotal"], styles["sub-row"])}
              >
                <h4>Đơn Hàng</h4>
                <p>
                  <strong>
                    {(totalPrice / 1.1)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    VND
                  </strong>
                </p>
              </div>
              <div
                className={classnames(styles["shipping"], styles["sub-row"])}
              >
                <h4>Phí Vận Chuyển</h4>
                <p>
                  <strong>
                    {((totalPrice / 1.1) * 0.1)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    VND
                  </strong>
                </p>
              </div>
              <Divider classname={styles["divider"]} />
              <div className={classnames(styles["tax"], styles["sub-row"])}>
                <p>
                  <strong>Đã bao gồm thuế 10%</strong>
                  <strong>
                    {((totalPrice / 1.1) * 0.1)
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    VND
                  </strong>
                </p>
              </div>
              <div className={classnames(styles["total"], styles["sub-row"])}>
                <h4>
                  <strong>TỔNG</strong>
                </h4>
                <p>
                  <strong>
                    {totalPrice
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    VND
                  </strong>
                </p>
              </div>

              <ButtonMain
                className={styles["submit"]}
                onClick={() => console.log(cart, "cart current")}
              >
                Đặt Hàng
              </ButtonMain>
            </div>
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
