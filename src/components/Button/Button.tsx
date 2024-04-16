import React from "react";
import style from "./button.module.scss";

type ButtonProps = {
  placeholder: string;
} & React.ComponentProps<"button">;

export default function Button({ placeholder, ...props }: ButtonProps) {
  return (
    <button className={style.botao} {...props}>
      {placeholder}
    </button>
  );
}
