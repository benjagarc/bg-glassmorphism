export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "email" | "password";
}
