import classnames from "classnames";
import LayoutStore from "components/container/layout/store";
import { ButtonMain } from "components/ui/button";
import { CardProductCartSub } from "components/ui/card";
import InputText from "components/ui/input";
import { Country } from "data/country";
import { data } from "data/store";
import { getProducts } from "lib/productService";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { removeFromCart, selectCartList, updateCart } from "redux/action/cart";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { CountryData, DistrictData, StateData, WardData } from "types/country";
import { Products } from "types/product";

import { headerLayouts } from "@/components/container/header";
import Divider from "@/components/ui/divider";
import { CreditCard, Dollar, Right, Tablet } from "@/components/ui/icons";
import InputPayment from "@/components/ui/input/payment";
import InputSelectAdress from "@/components/ui/input/selectAdress";

import styles from "./index.module.scss";

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
  state: string;
  district: string;
  ward: string;
  discount: string;
  price: number;
  shippingFee: number;
  vat: number;
  total: number;
}
const Shipping: NextPage<ShippingProps> = () => {
  const layout = "store";
  const router = useRouter();
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const cart = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();
  const [note, setNote] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData | null>(
    null
  );
  const [selectedWard, setSelectedWard] = useState<WardData | null>(null);

  const [formValues, setFormValues] = useState<ShippingForm>({
    phone: "",
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    district: "",
    ward: "",
    payment: "COD",
    discount: "",
    price: 0,
    shippingFee: 0,
    vat: 0,
    total: 0,
  });

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
    const totalCart = cart.reduce(
      (total: any, item: Products) => total + item.priceItem * item.amount,
      0
    );

    formValues.shippingFee > 0
      ? setFormValues({
          ...formValues,
          price: totalCart,
          vat: totalCart * 0.1,
          total: totalCart + formValues.shippingFee + totalCart * 0.1,
        })
      : setFormValues({
          ...formValues,
          price: totalCart,
          vat: totalCart * 0.1,
          total: totalCart + totalCart * 0.1,
        });
  }, [cart, formValues.shippingFee]);

  const onHandleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryName = e.target.value;
    const selectedCountry = Country.find(
      (country) => country.name === countryName
    );
    if (selectedCountry) {
      setSelectedCountry(selectedCountry);
      setFormValues({ ...formValues, country: selectedCountry.name });
    }
    setSelectedState(null);
    setSelectedDistrict(null);
    setSelectedWard(null);
  };

  const onHandleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = selectedCountry?.state.find(
      (state) => state.name === e.target.value
    );
    if (selectedState) {
      setSelectedState(selectedState);
      selectedState.code === 79
        ? setFormValues({
            ...formValues,
            state: selectedState.name,
            shippingFee: 0,
          })
        : setFormValues({
            ...formValues,
            state: selectedState.name,
            shippingFee: 40000,
          });
    }
    setSelectedDistrict(null);
    setSelectedWard(null);
  };
  const onHandleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDistrict = selectedState?.districts.find(
      (district) => district.name === e.target.value
    );
    if (selectedDistrict) {
      setSelectedDistrict(selectedDistrict);
      setFormValues({ ...formValues, district: selectedDistrict.name });
    }
    setSelectedWard(null);
  };
  const onHandleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWard = selectedDistrict?.wards.find(
      (ward) => ward.name === e.target.value
    );
    if (selectedWard) {
      setSelectedWard(selectedWard);
      setFormValues({ ...formValues, ward: selectedWard.name });
    }
  };
  const isFormValid =
    formValues.phone &&
    formValues.email &&
    formValues.lastName &&
    formValues.firstName &&
    formValues.address &&
    formValues.country &&
    formValues.state &&
    formValues.district &&
    formValues.ward;
  const submit = (cart: Products[], formValue: ShippingForm, note: string) => {
    const order = { cart, formValue, note };
    localStorage.setItem("ORDER", JSON.stringify(order));
    router.push("/thankyou");
  };

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
                title="Điện Thoại"
                type="number"
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, email: e.target.value });
                }}
                classname={styles["col-4"]}
                title="Email"
                type="email"
                required
              />
            </div>
            <div className={styles["row"]}>
              <h4>ĐỊA CHỈ GIAO HÀNG / INFORMATION</h4>

              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, lastName: e.target.value });
                }}
                classname={styles["col-4"]}
                type="text"
                title="Họ"
                required
              />
              <InputText
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, firstName: e.target.value });
                }}
                classname={styles["col-4"]}
                type="text"
                title="Tên"
                required
              />
              <InputText
                classname={styles["col-4"]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, address: e.target.value });
                }}
                type="text"
                title="Số nhà, Tên Đường"
                required
              />
              <InputSelectAdress
                arrow={true}
                col1={styles["col-4"]}
                col2={styles["col-4"]}
                col3={styles["col-4"]}
                selectedCountry={selectedCountry}
                selectedState={selectedState}
                selectedDistrict={selectedDistrict}
                selectedWard={selectedWard}
                onHandleCountry={onHandleCountryChange}
                onHandleState={onHandleStateChange}
                onHandleDistrict={onHandleDistrictChange}
                onHandleWard={onHandleWardChange}
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
                disabled
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
                            categoryItem,
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
                              href={`/store/${categoryItem}/${urlItem}`}
                              title={nameItem}
                              image={imgItem}
                              sizeItem={sizeSelected}
                              colorItem={colorSelected}
                              price={priceItem}
                              qualityItem={amount}
                              total={amount * priceItem}
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
                  type="text"
                  title="Thẻ quà tặng hoặc mã giảm giá"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFormValues({ ...formValues, discount: e.target.value });
                  }}
                />
                <ButtonMain classname={styles["button"]}>Áp Dụng</ButtonMain>
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
                    {formValues.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    &nbsp; VND
                  </strong>
                </p>
              </div>
              <div
                className={classnames(styles["shipping"], styles["sub-row"])}
              >
                <h4>Phí Vận Chuyển</h4>
                <p>
                  <strong>
                    {formValues.shippingFee
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    &nbsp; VND
                  </strong>
                </p>
              </div>
              <Divider classname={styles["divider"]} />
              <div className={classnames(styles["tax"], styles["sub-row"])}>
                <p>
                  <strong>Đã bao gồm thuế VAT 10%</strong>
                  <strong>
                    {formValues.vat
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    &nbsp; VND
                  </strong>
                </p>
              </div>
              <div className={classnames(styles["total"], styles["sub-row"])}>
                <h4>
                  <strong>TỔNG</strong>
                </h4>
                <p>
                  <strong>
                    {formValues.total
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    &nbsp; VND
                  </strong>
                </p>
              </div>

              <ButtonMain
                classname={styles["submit"]}
                onClick={() => submit(cart, formValues, note)}
                disabled={!isFormValid}
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
