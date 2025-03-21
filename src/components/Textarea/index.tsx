import { FC } from "react";
import { TextareaProps } from "./interface";
import stylesInput from "../Input/index.module.scss";
import stylesTextArea from "./index.module.scss";

export const Textarea: FC<TextareaProps> = (props) => {
  const { className, error, dark } = props;

  return (
    <textarea
      {...props}
      className={[
        stylesInput["custom-input"],
        error && stylesInput["error"],
        dark ? "bg-x3dark" : "bg-x3light",
        stylesTextArea["custom-textarea"],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
};

export default Textarea;
