import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import { Route, Routes, useNavigate } from 'react-router-dom';
import data from './data/data.json';
import { useEffect, useState } from 'react';
import TodoUpdate from './pages/TodoUpdate';

function App() {
  const [todos, setTodos] = useState([]);
  const [activity, setActivity] = useState('');

  const [updateData, setUpdateData] = useState('');
  const navigate = useNavigate();

  const getTodos = () => {
    setTodos([...data]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  function generateId() {
    return Date.now();
  }

  const saveTodoHandler = () => {
    if (activity) {
      setTodos([
        ...todos,
        {
          id: generateId(),
          task: activity,
          complete: false,
        },
      ]);
      setActivity('');
    }
  };

  const deleteTask = (id) => {
    let filteredTask = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTask);
  };

  const taskDone = (id) => {
    const activity = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }

      return todo;
    });

    setTodos(activity);
  };

  const changeTodo = (e) => {
    const newEntry = {
      id: updateData.id,
      task: e.target.value,
      complete: updateData.complete ? true : false,
    };

    setUpdateData(newEntry);
  };

  const updateTodo = () => {
    const filteredTodos = [...todos].filter(
      (todo) => todo.id !== updateData.id
    );

    const updatedObject = [...filteredTodos, updateData];
    setTodos(updatedObject);
    navigate('/');
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              todos={todos}
              deleteTask={deleteTask}
              taskDone={taskDone}
              setUpdateData={setUpdateData}
            />
          }
        />
        <Route
          path="todo"
          element={
            <TodoInput
              activity={activity}
              setActivity={setActivity}
              saveTodoHandler={saveTodoHandler}
            />
          }
        />
        <Route
          path="todo-update"
          element={
            <TodoUpdate
              updateData={updateData}
              changeTodo={changeTodo}
              updateTodo={updateTodo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
