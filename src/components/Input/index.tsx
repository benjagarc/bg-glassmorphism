import { FC } from "react";
import { InputProps } from "./interface";
import stylesInput from "./index.module.scss";

export const Input: FC<InputProps> = (props) => {
  const { className, error, dark } = props;

  return (
    <input
      {...props}
      className={[
        stylesInput["custom-input"],
        error && stylesInput["error"],
        dark ? "bg-x3dark" : "bg-x3light",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
};

export default Input;
