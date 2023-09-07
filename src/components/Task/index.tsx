import { useState } from "react";
import { Trash2 } from "lucide-react";

interface Item {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskProps {
  item: Item;
  changeCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function Task({ item, changeCompleted, deleteTask }: TaskProps) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => changeCompleted(item.id)}
      />
      <div
        style={{
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.description}
      </div>
      {confirmDelete ? (
        <div>
          <span
            onClick={() => {
              deleteTask(item.id);
              setConfirmDelete(false);
            }}
          >
            Confirma
          </span>
          <span onClick={() => setConfirmDelete(false)}>Cancela</span>
        </div>
      ) : (
        <Trash2 size={16} onClick={() => setConfirmDelete(true)} />
      )}
    </li>
  );
}
