import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
export interface ButtonProps {
  children: any;
  onClick?: any;
  classname?: string;
  type?: any;
  disabled?: boolean;
}
export const ButtonMain: React.FC<ButtonProps> = ({
  children,
  onClick,
  classname,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles["root"], classname)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ButtonSub: React.FC<ButtonProps> = ({
  children,
  onClick,
  classname,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles["root"]} ${styles["subBtn"]} ${classname} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export const ButtonCancel: React.FC<ButtonProps> = ({
  children,
  onClick,
  classname,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles["root"]} ${styles["cancelBtn"]} ${classname} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
