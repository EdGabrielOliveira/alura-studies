import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Relogio from "./Relogio/Relogio";

import style from "./cronometro.module.scss";
import { Task } from "../../types/task";
import { timetoSec } from "../../common/utils/time";

type TimeProps = {
  selecionado: Task | undefined;
  endTask: () => void;
};

export default function Cronometro({ selecionado, endTask }: TimeProps) {
  const [time, setTime] = useState<number | undefined>();

  useEffect(() => {
    if (selecionado) {
      setTime(timetoSec(selecionado.time));
    } else {
      setTime(undefined);
    }
  }, [selecionado]);

  function count(counting: number = 0) {
    setTimeout(() => {
      if (counting > 0) {
        setTime(counting - 1);
        return count(counting - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio time={time} />
      </div>
      <Button placeholder={"Iniciar"} onClick={() => count(time)} />
    </div>
  );
}
