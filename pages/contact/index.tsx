import LayoutStore from "components/container/layout/store";
import { ButtonMain } from "components/ui/button";
import InputText from "components/ui/input";
import { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { updateCart } from "redux/action/cart";
import { useAppDispatch } from "redux/hook";
import { Products } from "types/product";

import { headerLayouts } from "@/components/container/header";
import Divider from "@/components/ui/divider";

import styles from "./index.module.scss";

interface ContactProps {
  product: Products[];
}
interface ContactForm {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  note: string;
}
const Contact: NextPage<ContactProps> = () => {
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = useState<ContactForm>({
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
    note: "",
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
  }, [dispatch]);

  const isFormValid =
    formValues.phone &&
    formValues.email &&
    formValues.lastName &&
    formValues.firstName &&
    formValues.note;
  const submit = (formValue: ContactForm) => {
    localStorage.setItem("CONTACT_FORM", JSON.stringify(formValue));
  };

  return (
    <>
      <HeaderLayout layout={layout}></HeaderLayout>
      <LayoutStore>
        <span className={styles["subDecor"]}>
          <Divider />
          &nbsp;&nbsp;&nbsp;
          <p>Contact</p>
        </span>
        <h1 className={styles["title"]}>GỌI CHO TRINE</h1>
        <span className={styles["subDescript"]}>
          <p>
            Hãy liên hệ với chúng mình để được hỗ trợ tốt nhất nhé Trong trường
            hợp khẩn cấp, hãy liên hệ qua hotline:
            <br />
            <br />
            <strong>ALEX</strong> <br />
            <a href="tel:+84 944 606 333">+84 944 606 333</a>
            <br />
            <a href="mailto:trine.closet@gmail.com">trine.closet@gmail.com</a>
          </p>
        </span>
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
              <h4>NỘI DUNG / INFORMATION</h4>
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormValues({ ...formValues, lastName: e.target.value });
                }}
                classname={styles["col-4"]}
                type="text"
                title="Họ"
                required
              />

              <textarea
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setFormValues({ ...formValues, note: e.target.value });
                }}
                className={styles["note"]}
                placeholder="Ghi chú"
              />
            </div>
            <div className={styles["row"]}>
              <ButtonMain
                classname={styles["submit"]}
                onClick={() => submit(formValues)}
                disabled={!isFormValid}
              >
                GỬI TRINE
              </ButtonMain>
            </div>
            <div className={styles["row"]}>
              <p>
                <strong>Chi Nhánh Online:</strong> 491 Hậu Giang Quận 6 Thành
                Phố Hồ Chí Minh
              </p>
              <p>
                <strong>Cửa Hàng:</strong> 100C Ngô Quyền Phường 9 Thành Phố Cà
                Mau
              </p>
            </div>
          </div>
        </div>
      </LayoutStore>
    </>
  );
};
export default Contact;
