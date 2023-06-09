import React, { ChangeEventHandler } from "react";
import styles from "./index.module.scss";

interface InputPriceRangeProps {
  onChange?: ChangeEventHandler;
}

const InputPriceRange: React.FC<InputPriceRangeProps> = ({ onChange }) => {
  return (
    <div className={styles["root"]}>
      <div className={styles["price-field"]}>
        <input type="range" min="100" max="500" value="500" id="lower" />
      </div>
    </div>
  );
};

export default InputPriceRange;
