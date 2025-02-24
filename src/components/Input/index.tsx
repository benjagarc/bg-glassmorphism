import { FC } from "react";
import { InputProps } from "./interface";
import styles from "./index.module.scss";

export const Input: FC<InputProps> = (props) => {
  const { className } = props;
  return (
    <input
    className={`${className ?? ""} ${styles["custom-input"]} bg-x3dark`}
      {...props}
    />
  );
};

export default Input;
