import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import { Route, Routes } from 'react-router-dom';
import data from './data/data.json';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const getTodos = () => {
    setTodos([...data]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  function generateId() {
    return Date.now();
  }

  const addTask = () => {
    if (newTask) {
      setTodos([
        ...todos,
        {
          id: generateId(),
          task: newTask,
          complete: false,
        },
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    let filteredTask = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTask);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home todos={todos} deleteTask={deleteTask} />}
        />
        <Route
          path="todo"
          element={
            <TodoInput
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
