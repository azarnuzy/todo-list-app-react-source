import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import { Route, Routes, useNavigate } from 'react-router-dom';
import data from './data/data.json';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const [newTask, setNewTask] = useState('');

  function generateId() {
    return Date.now();
  }

  const addTask = () => {
    if (newTask) {
      setTodos([
        ...data,
        ...todos,
        {
          id: generateId(),
          task: newTask,
          complete: false,
        },
      ]);
      setNewTask('');
    }

    navigate('/');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={todos} />} />
        <Route path=":activityParams" element={<Home data={todos} />} />
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
