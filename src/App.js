import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import { Route, Routes } from 'react-router-dom';
import data from './data/data.json';

function App() {
  const todos = [...data];
  console.log('todos ' + todos);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path=":activity" element={<Home data={data} />} />
        <Route path="todo" element={<TodoInput />} />
      </Routes>
    </div>
  );
}

export default App;
