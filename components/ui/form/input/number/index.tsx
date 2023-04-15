import React, { useState } from "react";
import styles from "./index.module.scss";
import { Plus, Minus } from "components/ui/icons";

interface InputNumberProps {
  className?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({ className }) => {
  const [value, setValue] = useState(1);
  const increment = () => {
    setValue((prev) => prev + 1);
  };
  const decrement = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    } else {
      setValue(1);
    }
  };

  return (
    <div className={`${styles["root"]} ${className} `}>
      <button type="button" className={styles["button"]} onClick={decrement}>
        <Minus customClass={styles["icon"]} />
      </button>
      <div className={styles["counter"]}>
        <input
          className={styles["input"]}
          maxLength={10}
          type="text"
          defaultValue={value}
        />
        <div className={styles["num"]}>{value}</div>
      </div>
      <button type="button" className={styles["button"]} onClick={increment}>
        <Plus customClass={styles["icon"]} />
      </button>
    </div>
  );
};

export default InputNumber;

