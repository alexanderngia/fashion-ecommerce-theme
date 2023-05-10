import { ChangeEventHandler } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
export interface InputTextProps {
  placeholder: string;
  classname?: string;
  onChange?: ChangeEventHandler;
}

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  classname,
  onChange,
}) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      className={classnames(styles["root"], classname)}
      type="text"
    />
  );
};
export default InputText;
