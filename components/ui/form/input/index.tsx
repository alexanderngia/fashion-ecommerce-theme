import React, { useState } from "react";
import styles from "./index.module.scss";
import { Plus } from "@styled-icons/fa-solid/Plus";
import { Minus } from "@styled-icons/fa-solid/Minus";

interface InputNumberProps {
  className?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({ className }) => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((prev) => prev + 1);
  };
  const decrement = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    } else {
      setValue(0);
    }
  };

  return (
    <div className={`${styles["root"]} ${className} `}>
      <button
        type="button"
        className={`${styles["ctrl__button"]} ${styles["ctrl__button--decrement"]}`}
        onClick={decrement}
      >
        <Minus size={10} />
      </button>
      <div className={styles["ctrl__counter"]}>
        <input
          className={styles["ctrl__counter-input"]}
          maxLength={10}
          type="text"
          defaultValue={value}
        />
        <div className={styles["ctrl__counter-num"]}>{value}</div>
      </div>
      <button
        type="button"
        className={`${styles["ctrl__button"]} ${styles["ctrl__button--increment"]}`}
        onClick={increment}
      >
        <Plus size={10} />
      </button>
    </div>
  );
};

export default InputNumber;
