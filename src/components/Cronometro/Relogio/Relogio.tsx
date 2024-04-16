import React from "react";
import style from "./relogio.module.scss";

type TimeProps = {
  time: number | undefined;
};

export default function Relogio({ time = 0 }: TimeProps) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minTen, minUnit] = String(minutes).padStart(2, "0");
  const [secTen, secUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minTen}</span>
      <span className={style.relogioNumero}>{minUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secTen}</span>
      <span className={style.relogioNumero}>{secUnit}</span>
    </>
  );
}
