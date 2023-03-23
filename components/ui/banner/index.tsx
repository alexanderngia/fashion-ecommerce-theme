import { NextPage } from "next";
import React from "react";
import styles from "./index.module.scss";
interface BannerProps {}
const Banner: NextPage<BannerProps> = () => {
  return (
    <>
      <div className={styles["root"]}>
        <div className={styles["container"]}>
          <p>WELCOME TO SEXY WORLD!</p>
          <p>•</p>
          <p>WELCOME TO SEXY WORLD!</p>
          <p>•</p>
          <p>WELCOME TO SEXY WORLD!</p>
          <p>•</p>
          <p>WELCOME TO SEXY WORLD!</p>
          <p>•</p>
          <p>WELCOME TO SEXY WORLD!</p>
          <p>•</p>
          <p>WELCOME TO SEXY WORLD!</p>
          <p>•</p>
          <p>WELCOME TO SEXY WORLD!</p>
          <p>•</p>
        </div>
      </div>
    </>
  );
};
export default Banner;
