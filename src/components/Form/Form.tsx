import React, { useState } from "react";
import style from "./form.module.scss";
import Button from "../Button/Button";
import { Task } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

export const Form = ({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const [state, setState] = useState({
    task: "",
    time: "00:00:00",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: Task = {
      ...state,
      selecionado: false,
      completado: false,
      id: uuidv4(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log("state", state);
    setState({ task: "", time: "00:00:00" });
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label className={style.label} htmlFor="task">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          value={state.task}
          onChange={handleChange}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step={1}
          name="time"
          id="time"
          value={state.time}
          onChange={handleChange}
          min="00:00:00"
          max="01:30:00"
          required
        />
        <Button placeholder="Adicionar" type="submit" />
      </div>
    </form>
  );
};
