import React from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

export default function TodoInput({ newTask, setNewTask, addTask }) {
  return (
    <div className=" m-auto max-w-screen-lg ">
      <PageTitle>TodoInput</PageTitle>
      <div className="border border-slate-300 p-4 rounded-md">
        <div className="search-input flex">
          <label htmlFor="input-todo">
            {' '}
            <AiOutlineBook className="rounded-l-md w-[40px] h-[42px] px-[6px] border-0 text-white bg-[#16a3b5] flex hover:opacity-90 items-center cursor-pointer" />
          </label>
          <input
            placeholder="Input/Add Todo"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-y-[1px] w-full p-2 focus:outline-none border-slate-300 rounded-r-md input-todo"
            id="input-todo"
          />
        </div>
        {/* {message && <i className="text-[#d93649] mb-3 block">{message} </i>} */}
        <div className="action-button flex gap-4 mt-3">
          <button
            type="submit"
            onClick={addTask}
            className="w-full hover:opacity-90 p-2 bg-[#16a3b5] rounded-md text-white"
          >
            Submit
          </button>
          <Link
            to={`/`}
            className="border border-y-[1px] w-auto p-2 focus:outline-none border-slate-300 bg-[#d93649] hover:opacity-90 text-white rounded-md"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
