import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function TodoLists({
  todos,
  deleteTask,
  taskDone,
  setUpdateData,
}) {
  const navigate = useNavigate();
  return (
    <ul className="todo-lists">
      {todos
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((item) => {
          const lineThrough = item.complete
            ? 'line-through text-[#d93649]'
            : '';
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
                  onClick={() => taskDone(item.id)}
                  className="accent-lime-500 text-white"
                  readOnly
                />
                <button
                  onClick={() => {
                    setUpdateData({
                      id: item.id,
                      task: item.task,
                      complete: item.complete ? true : false,
                    });

                    navigate('/todo-update');
                  }}
                >
                  <AiFillEdit className="text-[#f0bf44] mx-3" />
                </button>
                <button onClick={() => deleteTask(item.id)}>
                  <AiFillDelete className="text-[#ce374d]" />
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
