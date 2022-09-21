import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import data from '../data/data.json';

export default function Home() {
  return (
    <div className=" m-auto max-w-screen-lg">
      <PageTitle>TodoSearch</PageTitle>
      <Header />
      <h2 className="text-[28px] font-medium text-center m-5">TodoList</h2>
      <div className="actions-buttons flex justify-between m-8">
        <button className="hover:opacity-90 py-2 px-6 bg-[#16a3b5] rounded-md text-white w-full">
          All
        </button>
        <button className="hover:opacity-90 py-2 px-6 bg-[#16a3b5] rounded-md text-white mx-8 w-full">
          Done
        </button>
        <button className="hover:opacity-90 py-2 px-6 bg-[#16a3b5] rounded-md text-white  w-full">
          Todo
        </button>
      </div>
      <ul className="todo-lists">
        {data.map((item) => {
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
                  readOnly
                  className="accent-lime-500 text-white"
                />
                <button>
                  <AiFillEdit className="text-[#f0bf44] mx-3" />
                </button>
                <button>
                  <AiFillDelete className="text-[#ce374d]" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="delete-action-buttons flex gap-5 mb-10">
        <button className="bg-[#d93649] p-2 rounded-md w-1/2 text-white">
          Delete done tasks
        </button>
        <button className="bg-[#d93649] p-2 rounded-md w-1/2 text-white">
          Delete all tasks
        </button>
      </div>
    </div>
  );
}
