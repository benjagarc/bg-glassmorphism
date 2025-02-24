import { FC } from "react";
import { InputProps } from "./interface";
import styles from "./index.module.scss";

export const Input: FC<InputProps> = (props) => {
  const { className, error } = props;
  return (
    <input
      className={`${className ?? ""} ${styles["custom-input"]} ${
        error ? styles["error"] : ""
      } bg-x2dark`}
      {...props}
    />
  );
};

export default Input;
