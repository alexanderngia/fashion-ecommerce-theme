import Footer from "components/container/footer";
import { NextPage } from "next";
import React from "react";
import styles from "./index.module.scss";
import logoFooter from "public/images/transBlack.png";

export interface LayoutStoreProps {
  children: React.ReactNode;
}

const LayoutStore: NextPage<LayoutStoreProps> = ({ children }) => {
  return (
    <div className={styles["root"]}>
      <div className={styles["main"]}>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};
export default LayoutStore;
