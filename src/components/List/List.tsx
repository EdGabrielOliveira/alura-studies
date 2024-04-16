import React from "react";
import style from "./list.module.scss";

import { Task } from "../../types/task";
import Item from "./Item/Item";

type Props = {
  tasks: Task[];
  selectTask: (selectedTask: Task) => void;
};

const List: React.FC<Props> = ({ tasks, selectTask }: Props) => {
  return (
    <div className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item tasks={[task]} key={task.id} selectTask={selectTask} />
        ))}
      </ul>
    </div>
  );
};

export default List;
