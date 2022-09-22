import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import { Route, Routes, useNavigate } from 'react-router-dom';
import data from './data/data.json';
import { useEffect, useState } from 'react';
import TodoUpdate from './pages/TodoUpdate';

function App() {
  const [todos, setTodos] = useState([]);
  const [activity, setActivity] = useState('');
  const [tempTodos, setTempTodos] = useState([]);
  const [filterAct, setFilterACt] = useState('');
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
    setTempTodos([]);
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
    const filteredTask = todos.filter((todo) => todo.id !== id);
    setTempTodos(setTempAction(filterAct, filteredTask));
    setTodos(filteredTask);
  };

  const taskDone = (id) => {
    const activity = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }

      return todo;
    });
    setTempTodos(setTempAction(filterAct, activity));
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
    setTempTodos(setTempAction(filterAct, updatedObject));
    setTodos(updatedObject);
    navigate('/');
  };

  const setTempAction = (filterAct, arrTodos) => {
    if (filterAct === 'select-done') {
      return arrTodos.filter((todo) => todo.complete === true);
    } else if (filterAct === 'select-todo') {
      return arrTodos.filter((todo) => todo.complete === false);
    } else {
      return arrTodos;
    }
  };

  const selectAllTodos = () => {
    setFilterACt('select-all');
    setTempTodos(todos);
  };

  const selectDoneTodos = () => {
    setFilterACt('select-done');
    const filteredTodos = [...todos].filter((todo) => todo.complete === true);
    setTempTodos(filteredTodos);
  };

  const selectTodos = () => {
    setFilterACt('select-todo');
    const filteredTodos = [...todos].filter((todo) => todo.complete === false);
    setTempTodos(filteredTodos);
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
              tempTodos={tempTodos}
              selectAllTodos={selectAllTodos}
              selectDoneTodos={selectDoneTodos}
              selectTodos={selectTodos}
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
