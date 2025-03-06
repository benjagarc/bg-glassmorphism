import { FC } from "react";
import stylesButton from "./index.module.scss";
import { ButtonProps } from "./interface";

export const Button: FC<ButtonProps> = (props) => {
  const { className, variant, size, outline } = props;
  return (
    <button
      {...props}
      className={[
        stylesButton["button"],
        outline && stylesButton["outline"],
        variant && stylesButton[variant],
        size && stylesButton[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
};

export default Button;
