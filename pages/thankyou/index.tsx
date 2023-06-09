import LayoutStore from "components/container/layout/store";
import { data } from "data/store";
import { NextPage } from "next";

import { headerLayouts } from "@/components/container/header";
import { ButtonMain } from "components/ui/button";

import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface ThankyouProps {}

const Thankyou: NextPage<ThankyouProps> = () => {
  const [paymentOrder, setPaymentOrder] = useState<string>("");
  const layout = "store";
  const HeaderLayout = headerLayouts[layout] || headerLayouts.default;
  const router = useRouter();

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("ORDER") || "{}");
    const { payment } = order.formValue;
    setPaymentOrder(payment);
  }, []);

  const backToStore = () => {
    router.push("/store");
  };
  return (
    <>
      <HeaderLayout data={data.nav} layout={layout}></HeaderLayout>
      <LayoutStore>
        <h1 className={styles["title"]}>TRÂN TRỌNG VÀ CẢM ƠN QUÝ KHÁCH !</h1>
        <div className={styles["subtitle"]}>
          {paymentOrder === "COD" ? (
            <>
              <p>
                Đơn hàng của quý khách sẽ được Trine xử lí trong hôm nay và bắt
                đầu vận chuyển vào ngày mai.
              </p>
            </>
          ) : (
            <>
              <p>
                Đơn hàng của quý khách sẽ được Trine xử lí và vận chuyển sau khi
                thanh toán được xác nhận trong vòng 30 phút tới.
              </p>
            </>
          )}
          <br />
          <p>Cảm ơn bạn đã tin tưởng và mua hàng tại Trine Closet.</p>
        </div>
        <ButtonMain onClick={() => backToStore()}>Trở lại cửa hàng</ButtonMain>
      </LayoutStore>
    </>
  );
};
export default Thankyou;
