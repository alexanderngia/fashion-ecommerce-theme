import React, { ChangeEventHandler } from "react";
import styles from "./index.module.scss";

interface InputColorProps {
  onChange: ChangeEventHandler;
  listColor: string[];
}

const InputColor: React.FC<InputColorProps> = ({ onChange, listColor }) => {
  return (
    <div className={styles["root"]}>
      {listColor &&
        React.Children.toArray(
          listColor.map((colorValue) => {
            return (
              <>
                <input
                  className={styles["input"]}
                  name="color"
                  id={colorValue}
                  onChange={onChange}
                  type="radio"
                  value={colorValue}
                  required
                ></input>
                <label
                  className={styles["label"]}
                  style={{ backgroundColor: `${colorValue}` }}
                  htmlFor={colorValue}
                ></label>
              </>
            );
          })
        )}
    </div>
  );
};

export default InputColor;
