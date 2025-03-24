import { FC } from "react";
import { TooltipProps } from "./interface";
import styles from "./index.module.scss";

export const Tooltip: FC<TooltipProps> = ({
  text,
  children,
  position,
  className,
  style,
  variant,
}) => {
  const getPosition = () => {
    switch (position) {
      case "top":
        return styles["top"];
      case "left":
        return styles["left"];
      case "right":
        return styles["right"];
      default:
        return styles["bottom"];
    }
  };

  console.log(styles[`${variant}`]);
  return (
    <>
      <div
        className={`${styles["container"]} 
        ${className ?? ""}
        `}
        style={{ ...style }}
      >
        {children}
        <span className={`${styles[`tooltip-text`]} ${getPosition()} ${variant && styles[variant]}`}>
          {text}
        </span>
      </div>
    </>
  );
};

export default Tooltip;
