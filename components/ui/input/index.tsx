import { ChangeEventHandler } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
export interface InputTextProps {
  placeholder: string;
  classname?: string;
  type: string;
  onChange?: ChangeEventHandler;
  required?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  classname,
  onChange,
  type,
  ...props
}) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      className={classnames(styles["root"], classname)}
      type={type}
      {...props}
    />
  );
};
export default InputText;
