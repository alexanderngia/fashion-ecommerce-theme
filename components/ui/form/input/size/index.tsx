import React, { ChangeEventHandler } from "react";
import styles from "./index.module.scss";

interface InputSizeProps {
  onChange: ChangeEventHandler;
  listSize: string[];
}

const InputSize: React.FC<InputSizeProps> = ({ listSize, onChange }) => {
  return (
    <div className={styles["root"]}>
      {listSize &&
        React.Children.toArray(
          listSize.map((sizeValue) => {
            return (
              <>
                <input
                  className={styles["input"]}
                  id={sizeValue}
                  onChange={onChange}
                  type="radio"
                  value={sizeValue}
                  name="size"
                  required
                ></input>
                <label
                  className={styles["label"]}
                  htmlFor={sizeValue}
                >
                  {sizeValue}
                </label>
              </>
            );
          })
        )}
    </div>
  );
};

export default InputSize;
