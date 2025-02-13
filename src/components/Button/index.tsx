import { FC } from "react";
import stylesButton from "./index.module.scss";
import { ButtonProps } from "./interface";

export const Button: FC<ButtonProps> = (props) => {
  const { className, variant, size } = props;
  return (
    <button
      className={`${className ?? ""} ${stylesButton["button"]} ${
        variant && stylesButton[variant]
      } ${size && stylesButton[size]}`}
      {...props}
    />
  );
};

export default Button;
