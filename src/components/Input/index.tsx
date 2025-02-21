import { FC } from "react";
import { InputProps } from "./interface";

export const Input: FC<InputProps> = (props) => {

  const { className } = props;
  return <input className={`${className ?? ""}  bg-light`}  {...props} />;
};

export default Input;
