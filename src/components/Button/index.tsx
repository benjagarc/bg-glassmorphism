import { FC } from "react";
// import stylesButton from "./index.module.scss";
import { ButtonProps } from "./interface";

export const Button: FC<ButtonProps> = (props) => {
  return <button {...props} />;
};

export default Button;
