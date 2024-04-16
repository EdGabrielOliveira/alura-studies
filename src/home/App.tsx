import style from "./App.module.scss";

import { Form } from "../components/Form/Form";
import List from "../components/List/List";
import Cronometro from "../components/Cronometro/Cronometro";
import { useState } from "react";
import { Task } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selecionado, setSelected] = useState<Task>();

  function selectTask(selectTask: Task) {
    setSelected(selectTask);
    setTasks((oldTask) =>
      oldTask.map((task) => ({
        ...task,
        selecionado: task.id === selectTask.id ? true : false,
      })),
    );
  }

  function endTask() {
    if (selecionado) {
      setTasks((oldTasks) =>
        oldTasks.map((task) =>
          task.id === selecionado.id
            ? { ...task, selecionado: false, completado: true }
            : task,
        ),
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometro selecionado={selecionado} endTask={endTask} />
    </div>
  );
}

export default App;
