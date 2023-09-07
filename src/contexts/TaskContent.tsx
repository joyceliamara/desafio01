import { createContext, ReactNode, useState } from "react";

export const TaskContext = createContext<TaskContextValue>(
  {} as TaskContextValue
);

export function TaskProvider({ children }: TaskProviderProps) {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      description: "Lorem Ipsum 1",
      completed: false,
    },
    {
      id: 2,
      description: "Lorem Ipsum 2",
      completed: true,
    },
    {
      id: 3,
      description: "Lorem Ipsum 3",
      completed: true,
    },
  ]);

  // function completedQuantityOld() {
  //   let total = 0;
  //   for (const item of items) {
  //     if (item.completed) {
  //       total++;
  //     }
  //   }
  //   return total;
  // }

  function completedQuantity() {
    return items.reduce((prev, current) => {
      if (current.completed) {
        prev++;
      }

      return prev;
    }, 0);
  }

  function changeCompleted(id: number) {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  }

  function deleteTask(id: number) {
    const filtered = items.filter((item) => item.id !== id);

    setItems(filtered);
  }

  function createTask(description: string) {
    setItems((prev) => [
      ...prev,
      {
        completed: false,
        description,
        id: prev[prev.length - 1].id + 1,
      },
    ]);
  }

  return (
    <TaskContext.Provider
      value={{
        items,
        completedQuantity,
        changeCompleted,
        deleteTask,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

interface TaskProviderProps {
  children?: ReactNode;
}

interface Item {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskContextValue {
  items: Item[];
  completedQuantity: () => number;
  changeCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
  createTask: (description: string) => void;
}
