import styles from './ToDoList.module.css';
import NoteImg from '../assets/note.svg';
import DeleteImg from '../assets/delete.svg';
import { useContext, useState } from "react";
import { TaskContext } from "../store/TaskContext/TaskContext";

function ToDoList() {
  const { tasks, addTask, deleteTask } = useContext(TaskContext);

  const [newTask, setNewTask] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask('');
    }
  };
  return (
    <div className={styles.myApp}>
      <div className={styles.header}>
        <p className={styles.line}></p>
        <h1 className={styles.headerTitle}>To-Do App</h1>
        <p className={styles.line}></p>
      </div>
      <div className={styles.noteBox}>
        <p className={styles.bottomLine}></p>
        <img src={NoteImg} alt="Note" className={styles.noteIcon} />
        <p className={styles.bottomLine}></p>
      </div>
      <div className={styles.taskInput}>
        <input
          type="text"
          value={newTask}
          onChange={handleInput} // Update newTask state on input change
        />
        <button className={styles.addButton} onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <p className={styles.tasksLine}></p>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="taskText">{task}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)} // Call deleteTask from context
            >
              <img src={DeleteImg} alt="delete" className={styles.deleteButton} />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
