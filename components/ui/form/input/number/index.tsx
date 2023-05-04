import React, { MouseEventHandler, useState } from "react";
import styles from "./index.module.scss";
import { Plus, Minus } from "components/ui/icons";
import classnames from "classnames";
import { useAppDispatch } from "redux/hook";

interface InputNumberProps {
  className?: string;
  valueDefault: number;
  decrement: MouseEventHandler<HTMLButtonElement>;
  increment: MouseEventHandler<HTMLButtonElement>;
}

const InputNumber: React.FC<InputNumberProps> = ({
  className,
  valueDefault,
  decrement,
  increment,
}) => {


  return (
    <div className={classnames(styles["root"], className)}>
      <button type="button" className={styles["button"]} onClick={decrement}>
        <Minus customClass={styles["icon"]} />
      </button>
      <div className={styles["counter"]}>
        <input className={styles["input"]} type="number" defaultValue={valueDefault} />
        <div className={styles["num"]}>{valueDefault}</div>
      </div>
      <button type="button" className={styles["button"]} onClick={increment}>
        <Plus customClass={styles["icon"]} />
      </button>
    </div>
  );
};

export default InputNumber;
