import { CheckboxProps } from "./interface";
import styles from "./index.module.scss";
import { FC } from "react";

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { id, variant, dark } = props;
  return (
    <div className={`${styles["container-checkbox"]}`}>
      <input type="checkbox" {...props} className={`${styles.checkbox} `} />
      <label
        htmlFor={id}
        className={`${styles["custom-label"]} ${
          dark ? " bg-x3dark" : " bg-x3light"
        } ${variant ? styles[variant] : ""}`}
      />
    </div>
  );
};

export default Checkbox;
