import { FormEvent, useContext, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./CreateTask.module.css";
import { TaskContext } from "../../contexts/TaskContent";

export default function CreateTask() {
  const { createTask } = useContext(TaskContext);

  const [description, setDescription] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    createTask(description);
    setDescription("");
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Criar</Button>
    </form>
  );
}
