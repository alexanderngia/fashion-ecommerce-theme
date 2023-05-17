import { ChangeEventHandler } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
export interface InputTextProps {
  placeholder?: string;
  classname?: string;
  type: string;
  title: string;
  onChange?: ChangeEventHandler;
  required?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  classname,
  onChange,
  type,
  title,
  ...props
}) => {
  return (
    <div className={classnames(styles["root"], classname)}>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className={classnames(styles["input"])}
        type={type}
        {...props}
      />
      <p className={styles["title"]}>{title}</p>
    </div>
  );
};
export default InputText;
