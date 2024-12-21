
import './App.css';
import { TaskContextProvider } from './store/TaskContext/TaskContext'; 
import ToDoList from './ToDoList/ToDoList';

function App() {
  return (
    <TaskContextProvider> 
      <div className="App">
        <ToDoList />
      </div>
    </TaskContextProvider>
  );
}

export default App;
