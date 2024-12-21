
import {createContext, useState, ReactNode} from "react";

type TaskContextType = {
  tasks: string[];
  addTask: (newTask: string) => void;
  deleteTask: (index: number) => void;
};

 const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
});
type TaskContextProviderProps = {
  children: ReactNode;
};
export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>(['This is a task', 'This is a task', 'This is a task']);
  
const addTask = (newTask: string) => {
  if (newTask.trim() !== "") {
    if (tasks.every(task => task === 'This is a task')) {
      setTasks([newTask]);
    } else {
      setTasks(prevTasks => [...prevTasks, newTask]);
    }
  }
};
  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export { TaskContext };