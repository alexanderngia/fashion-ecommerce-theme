import Footer from "components/container/footer";
import { NextPage } from "next";
import React from "react";
import styles from "./index.module.scss";

export interface LayoutHomeProps {
  children: React.ReactNode;
}

const LayoutHome: NextPage<LayoutHomeProps> = ({ children }) => {
  return (
    <div className={styles["root"]}>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default LayoutHome;
