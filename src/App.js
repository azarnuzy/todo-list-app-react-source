import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import { Route, Routes, useNavigate } from 'react-router-dom';
import data from './data/data.json';
import { useEffect, useState } from 'react';
import TodoUpdate from './pages/TodoUpdate';
import Swal from 'sweetalert2';

function App() {
  const [todos, setTodos] = useState([]);
  const [activity, setActivity] = useState('');
  const [tempTodos, setTempTodos] = useState([]);
  const [filterAct, setFilterACt] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [search, setSearch] = useState('');
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

  const notification = (status, msg, task) => {
    const notif = Swal.fire({
      icon: status,
      title: msg,
      text: `Task: ${task}`,
    });

    return notif;
  };

  const deleteNotification = (doDelete) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a3b5',
      cancelButtonColor: '#d93649',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', `Your task has been deleted.`, 'success');
        doDelete();
      }
    });
  };

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

      notification('success', 'Your task has been saved', activity);
      setActivity('');
    } else {
      notification('warning', 'Insert Your Activity', '-');
    }
  };

  const deleteTask = (id) => {
    const doDelete = () => {
      const filteredTask = todos.filter((todo) => todo.id !== id);
      setTempTodos(setTempAction(filterAct, filteredTask));
      setTodos(filteredTask);
    };

    deleteNotification(doDelete);
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
    notification('success', 'Your task has been updated', updateData.task);
    navigate('/');
  };

  const setTempAction = (filterAct, arrTodos) => {
    if (filterAct === 'select-done') {
      return arrTodos.filter((todo) => todo.complete === true);
    } else if (filterAct === 'select-todo') {
      return arrTodos.filter((todo) => todo.complete === false);
    } else if (filterAct === 'select-search') {
      return arrTodos.filter((todo) => {
        return todo.task.toUpperCase().indexOf(activity.toUpperCase()) > -1;
      });
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

  const getSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  const searchTodos = () => {
    setFilterACt('select-search');
    const filteredTodos = [...todos].filter((todo) => {
      return todo.task.toUpperCase().indexOf(search.toUpperCase()) > -1;
    });
    setTempTodos(filteredTodos);
  };

  const deleteDoneTask = () => {
    const doDelete = () => {
      const filteredTask = todos.filter((todo) => todo.complete === false);
      setTempTodos(setTempAction(filterAct, filteredTask));
      setTodos(filteredTask);
    };

    deleteNotification(doDelete);
  };

  const deleteAllTask = () => {
    const doDelete = () => {
      setTempTodos([]);
      setTodos([]);
    };

    deleteNotification(doDelete);
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
              search={search}
              getSearch={getSearch}
              searchTodos={searchTodos}
              deleteDoneTask={deleteDoneTask}
              deleteAllTask={deleteAllTask}
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
