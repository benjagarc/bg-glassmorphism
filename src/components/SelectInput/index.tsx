import { FC } from "react";
import { SelectInputProps } from "./interface";
import stylesInput from "../Input/index.module.scss";
import stylesSelect from './index.module.scss';

export const SelectInput: FC<SelectInputProps> = (props) => {
  const { className, error, dark, options } = props;

  return (
    <select
      {...props}
      className={[
        stylesSelect["custom-select"],
        stylesInput["custom-input"],
        error && stylesInput["error"],
        dark ? "bg-x3dark" : "bg-x3light",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {options?.map((option, index) => (
        <option key={index} value={option?.value ?? option}>
          {option?.name ?? option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
