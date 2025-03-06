import { FC } from "react";
import { InputProps } from "./interface";
import styles from "./index.module.scss";

export const Input: FC<InputProps> = (props) => {
  const { className, error, dark } = props;
  return (
    <input
      className={[
        styles["custom-input"],
        error && styles["error"],
        dark ? "bg-x3dark" : "bg-x3light",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};

export default Input;
