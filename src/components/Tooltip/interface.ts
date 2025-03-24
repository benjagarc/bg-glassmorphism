import { CSSProperties, ReactElement } from "react";

export interface TooltipProps {
  children: ReactElement | ReactElement[];
  text: string;
  position?: "top" | "left" | "right";
  className?: string;
  style?: CSSProperties;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
}
