import React from "react";
import style from "./item.module.scss";
import { Task } from "../../../types/task";

type ItemProps = {
  tasks: Task[];
  selectTask: (selectedTask: Task) => void;
};

const Item: React.FC<ItemProps> = ({ tasks, selectTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          className={`${style.item} ${task.selecionado ? style.itemSelecionado : ""} ${
            task.completado ? style.itemCompletado : ""
          }`}
          key={task.id}
          onClick={() => !task.completado && selectTask(task)}
        >
          <h3>{task.task}</h3>
          <span>{task.time}</span>

          {task.completado && (
            <span className={style.concluido} aria-label="tarefa completada"></span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Item;
