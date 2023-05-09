import styles from "./index.module.scss";
import classnames from "classnames";
export interface InputTextProps {
  placeholder: string;
  classname?: string;
}

const InputText: React.FC<InputTextProps> = ({ placeholder, classname }) => {
  return (
    <input
      placeholder={placeholder}
      className={classnames(styles["root"], classname)}
      type="text"
    />
  );
};
export default InputText;
