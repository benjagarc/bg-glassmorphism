export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  dark?: boolean;
}
