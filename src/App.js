import Home from './pages/Home';
import TodoInput from './pages/TodoInput';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<TodoInput />} />
      </Routes>
    </div>
  );
}

export default App;
