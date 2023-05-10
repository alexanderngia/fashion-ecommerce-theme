import React, { ChangeEventHandler, ReactNode, useState } from "react";
import styles from "./index.module.scss";
import { ChevronDown, Dollar } from "components/ui/icons";
import classnames from "classnames";

interface InputPaymentProps {
  onChange?: ChangeEventHandler;
  name: string;
  id: string;
  value: string;
  label: string;
  subLabel: string;
  children?: ReactNode;
  arrow?: boolean;
  defaultChecked?: boolean;
  customCol?: string;
}

const InputPayment: React.FC<InputPaymentProps> = ({
  onChange,
  name,
  id,
  value,
  label,
  subLabel,
  children,
  arrow,
  customCol,
  ...props
}) => {
  return (
    <div className={styles["root"]}>
      <input
        name={name}
        id={id}
        onChange={onChange}
        type="radio"
        value={value}
        required
        {...props}
      />
      <label className={styles["label"]} htmlFor={id}>
        <div className={classnames(styles["col"], customCol)}>
          {children}
          {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
        </div>

        <div className={classnames(styles["col"], styles["describe"])}>
          <span>{subLabel}</span>
          <p>{label}</p>
        </div>
      </label>
    </div>
  );
};

export default InputPayment;
