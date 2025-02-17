import { FC } from "react";
import { InputProps } from "./interface";

export const Input: FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default Input;
