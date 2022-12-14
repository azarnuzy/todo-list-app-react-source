import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header({ search, getSearch, searchTodos }) {
  return (
    <div className="border border-slate-300 p-4 sm:rounded-md">
      <div className="search-input flex mb-6">
        <label htmlFor="search-todo">
          {' '}
          <AiOutlineSearch className="rounded-l-md w-[40px] h-[42px] px-[6px] border-0 text-white bg-[#16a3b5] flex hover:opacity-90 items-center cursor-pointer" />
        </label>
        <input
          type="text"
          placeholder="Search Todo"
          value={search}
          onChange={(e) => getSearch(e)}
          className="border border-y-[1px] w-full  sm:w-3/5 p-2 focus:outline-none border-slate-300 rounded-r-md search-todo"
          id="search-todo"
        />
      </div>
      <div className="flex justify-between flex-col sm:flex-row gap-3">
        <button
          className="w-full sm:w-[64%] hover:opacity-90 p-2 bg-[#16a3b5] rounded-md text-white"
          onClick={searchTodos}
        >
          Search
        </button>
        <Link
          to="/todo"
          className="hover:opacity-90 text-center py-2 px-6 bg-[#16a3b5] rounded-md text-white"
        >
          Add New Task
        </Link>
      </div>
    </div>
  );
}
