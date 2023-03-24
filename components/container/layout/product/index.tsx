import Footer from "components/container/footer";
import { NextPage } from "next";
import React from "react";
import styles from "./index.module.scss";

export interface LayoutProductProps {
  children: React.ReactNode;
}

const LayoutProduct: NextPage<LayoutProductProps> = ({ children }) => {
  return (
    <div className={styles["root"]}>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default LayoutProduct;
