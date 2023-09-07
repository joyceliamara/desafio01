import Badge from "../Badge";
import styles from "./Tasklist.module.css";
import clipboard from "../../assets/images/clipboard.svg";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContent";

import Task from "../Task";

export default function TaskList() {
  const { items, completedQuantity, changeCompleted, deleteTask } =
    useContext(TaskContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.taskListHeader}>
        <span>
          Tarefas criadas <Badge quantity={items.length} />
        </span>
        <span>
          Concluídas <Badge quantity={completedQuantity()} />
        </span>
      </div>
      {!items.length ? (
        <div className={styles.nothingToShow}>
          <img src={clipboard} />
          <div>
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <ul className={styles.list}>
          {items.reverse().map((item) => (
            <Task
              item={item}
              changeCompleted={changeCompleted}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
