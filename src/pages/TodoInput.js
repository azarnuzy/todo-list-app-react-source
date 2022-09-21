import React from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import PageTitle from '../components/PageTitle';

export default function TodoInput() {
  return (
    <div className=" m-auto max-w-screen-lg ">
      <PageTitle>TodoInput</PageTitle>
      <div className="border border-slate-300 p-4 rounded-md">
        <div className="search-input flex mb-3">
          <label htmlFor="search-todo">
            {' '}
            <AiOutlineBook className="rounded-l-md w-[40px] h-[42px] px-[6px] border-0 text-white bg-[#16a3b5] flex hover:opacity-90 items-center cursor-pointer" />
          </label>
          <input
            type="text"
            placeholder="Input/Add Todo"
            className="border border-y-[1px] w-full p-2 focus:outline-none border-slate-300 rounded-r-md search-todo"
            id="search-todo"
          />
        </div>
        <button className="w-full hover:opacity-90 p-2 bg-[#16a3b5] rounded-md text-white">
          Submit
        </button>
      </div>
    </div>
  );
}
