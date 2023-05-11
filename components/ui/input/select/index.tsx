import { ChangeEventHandler } from "react";
import { ChevronDown } from "../../icons";
import styles from "./index.module.scss";
import { StateData } from "types/state";
export interface InputSelectProps {
  onChange?: ChangeEventHandler;
  id: string;
  value: any;
  arrow?: boolean;
  name: string;
  required?: boolean;
}

const InputSelect: React.FC<InputSelectProps> = ({
  onChange,
  id,
  value,
  arrow,
  name,
  ...props
}) => {
  return (
    <div className={styles["root"]}>
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
      <p className={styles["title"]}>Quốc Gia</p>
      {arrow && <ChevronDown customClass={styles["chevronDown"]} />}
    </div>
  );
};
export default InputSelect;
