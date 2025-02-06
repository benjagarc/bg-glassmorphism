import stylesButton from "./index.module.scss";

export const Button = () => {
  return <button className={`${stylesButton["button"]}`}>Button</button>;
};

export default Button;
