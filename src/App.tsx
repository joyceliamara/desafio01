import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./contexts/TaskContent";

export default function App() {
  return (
    <div>
      <Header />
      <TaskProvider>
        <CreateTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
}
