import Footer from "components/container/footer";
import { NextPage } from "next";
import React from "react";
import styles from "./index.module.scss";

export interface LayoutDefaultProps {
  children: React.ReactNode;
}

const LayoutDefault: NextPage<LayoutDefaultProps> = ({ children }) => {
  return (
    <div className={styles["root"]}>
      <div className={styles["main"]}>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};
export default LayoutDefault;
