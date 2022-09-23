import React from 'react';

export default function ActionsButton({
  selectAllTodos,
  selectDoneTodos,
  selectTodos,
}) {
  return (
    <div className="actions-buttons flex justify-between m-8">
      <button
        className="hover:opacity-90 py-2 px-6 bg-[#16a3b5] rounded-md text-white w-full"
        onClick={selectAllTodos}
      >
        All
      </button>
      <button
        className="hover:opacity-90 py-2 px-6 bg-[#16a3b5] rounded-md text-white mx-8 w-full"
        onClick={selectDoneTodos}
      >
        Done
      </button>
      <button
        className="hover:opacity-90 py-2 px-6 bg-[#16a3b5] rounded-md text-white  w-full"
        onClick={selectTodos}
      >
        Todo
      </button>
    </div>
  );
}

export function DeleteButtons({ deleteDoneTask, deleteAllTask }) {
  return (
    <div className="delete-action-buttons flex gap-5 mb-10">
      <button
        className="bg-[#d93649] p-2 rounded-md w-1/2 text-white"
        onClick={deleteDoneTask}
      >
        Delete done tasks
      </button>
      <button
        className="bg-[#d93649] p-2 rounded-md w-1/2 text-white"
        onClick={deleteAllTask}
      >
        Delete all tasks
      </button>
    </div>
  );
}
