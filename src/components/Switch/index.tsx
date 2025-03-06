import { CheckboxProps } from "./interface";
import styles from "./index.module.scss";
import { FC, useState } from "react";

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { id, variant, dark, color } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className={`${styles["container-checkbox"]}`}>
      <input
        type="checkbox"
        {...props}
        className={`${styles.checkbox} `}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={`${styles["custom-label"]} ${
          dark ? " bg-x3dark" : " bg-x3light"
        } ${variant ? styles[variant] : ""}`}
        // style={{ background: `${color ?? ""}` }}
        style={
          isChecked && color
            ? { background: color, border: `1px solid ${color}` }
            : {}
        }
      />
    </div>
  );
};

export default Checkbox;
