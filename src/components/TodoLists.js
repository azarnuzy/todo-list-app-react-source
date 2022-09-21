import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function TodoLists({ data }) {
  const [todos, setTodos] = useState();
  const navigate = useNavigate();

  function removeTodoHandler(todoId) {
    data = data.filter((todo) => {
      return todo.id !== todoId;
    });

    console.log(data);
  }

  return (
    <ul className="todo-lists">
      {data.map((item) => {
        const lineThrough = item.complete ? 'line-through text-[#d93649]' : '';

        return (
          <li
            key={item.id}
            className="border border-slate-300 p-2 flex justify-between mb-3 rounded-sm"
          >
            <span className={`font-medium ${lineThrough}`}>{item.task}</span>
            <div className="action-list flex">
              <input
                type="checkbox"
                checked={item.complete}
                readOnly
                className="accent-lime-500 text-white"
              />
              <button>
                <AiFillEdit className="text-[#f0bf44] mx-3" />
              </button>
              <button onClick={removeTodoHandler.bind(this, item.id)}>
                <AiFillDelete className="text-[#ce374d]" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
