import React from "react";
import styles from "./index.module.scss";
import classnames from "classnames";

export interface DividerProps {
  classname?: string;
}
const Divider: React.FC<DividerProps> = ({ classname }) => {
  return (
    <span className={classnames(styles["root"], classname)}>
      <div className={styles["divider"]}></div>
    </span>
  );
};

export default Divider;
