import React from "react";
import styles from "./index.module.scss";
const Divider = () => {
  return (
    <span className={styles["root"]}>
      <div className={styles["divider"]}></div>
    </span>
  );
};

export default Divider;
