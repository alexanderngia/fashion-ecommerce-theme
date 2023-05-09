import React, { ChangeEventHandler, ReactNode } from "react";
import styles from "./index.module.scss";
import { Dollar } from "components/ui/icons";
import classnames from "classnames";

interface InputPaymentProps {
  onChange: ChangeEventHandler;
  id: string;
  value: string;
  label: string;
  subLabel: string;
  children: ReactNode;
}

const InputPayment: React.FC<InputPaymentProps> = ({
  onChange,
  id,
  value,
  label,
  subLabel,
  children,
}) => {
  return (
    <div className={styles["root"]}>
      <label className={styles["label"]} htmlFor={id}>
          <input
            name="payment"
            id={id}
            onChange={onChange}
            type="radio"
            value={value}
            required
          ></input>
        <div className={classnames(styles["col"])}>{children}</div>
        <div className={classnames(styles["col"], styles["describe"])}>
          <span>{subLabel}</span>
          <p>{label}</p>
        </div>
      </label>
    </div>
  );
};

export default InputPayment;
