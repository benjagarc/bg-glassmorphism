import { FC } from "react";
import stylesButton from "./index.module.scss";
import { ButtonProps } from "./interface";

export const Button: FC<ButtonProps> = (props) => {
  const { className, variant } = props;
  return (
    <button
      className={`${className ?? ""} ${stylesButton["button"]} ${
        variant && stylesButton[variant]
      }`}
      {...props}
    />
  );
};

export default Button;
