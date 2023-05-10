import { ChangeEventHandler } from "react";
import { ChevronDown } from "../../icons";
import styles from "./index.module.scss";
import classnames from "classnames";
import { StateData } from "types/country";
export interface InputSelectProps {
  onChange?: ChangeEventHandler;
  id: string;
  value: any;
  label: string;
  subLabel: string;
  arrow?: boolean;
  name: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  onChange,
  id,
  value,
  label,
  subLabel,
  arrow,
  name,
}) => {
  return (
    <div className={styles["root"]}>
      <label className={styles["label"]} htmlFor={id}>
        <div className={classnames(styles["col"])}>
          {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
        </div>
        <div className={classnames(styles["col"], styles["describe"])}>
          <span>{subLabel}</span>
          <p>{label}</p>
        </div>
      </label>
      <select name={name} id={id}>
        {value &&
          value.map(({ name }: StateData, index: number) => {
            return (
              <option key={name + index} value={name}>
                {name}
              </option>
            );
          })}
      </select>
    </div>
  );
};
export default InputSelect;
