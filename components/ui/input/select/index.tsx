import { ChangeEventHandler } from "react";
import { ChevronDown } from "../../icons";
import styles from "./index.module.scss";
import { StateData } from "types/country";
import classnames from "classnames";
export interface InputSelectProps {
  onChange?: ChangeEventHandler;
  id: string;
  value: any;
  arrow?: boolean;
  name: string;
  required?: boolean;
  title: string;
  classname?: string;
  state?: boolean;
  districts?: boolean;
}

const InputSelect: React.FC<InputSelectProps> = ({
  onChange,
  id,
  value,
  arrow,
  name,
  classname,
  title,
  state,
  districts,
  ...props
}) => {
  return (
    <div className={classnames(styles["root"], classname)}>
      <select onChange={onChange} name={name} id={id} {...props}>
        {value &&
          value.map(({ name }: StateData, index: number) => {
            return (
              <option key={name + index} value={name}>
                {name}
              </option>
            );
          })}
      </select>
      <p className={styles["title"]}>{title}</p>
      {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
    </div>
  );
};
export default InputSelect;
