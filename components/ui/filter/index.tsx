import React, { MouseEventHandler } from "react";
import styles from "./index.module.scss";
import { StyledIcon } from "@styled-icons/styled-icon";

interface FilterProps {
  title?: string;
  iconFilter?: StyledIcon | any;
  onClick?: MouseEventHandler;
}

const Filter: React.FC<FilterProps> = ({ title, iconFilter, onClick }) => {
  return (
    <div className={styles["root"]} onClick={onClick}>
      <>
        <p>{title}</p>
        {iconFilter}
      </>
    </div>
  );
};

export default Filter;
