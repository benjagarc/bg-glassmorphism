export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  dark?: boolean;
  options: string[] | optionsTypes[]; 
}


type optionsTypes = { name: string, value: string}; 