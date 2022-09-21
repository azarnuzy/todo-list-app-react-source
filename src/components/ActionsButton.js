import React from 'react';

export default function ActionsButton() {
  return (
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
  );
}

export function DeleteButtons() {
  return (
    <div className="delete-action-buttons flex gap-5 mb-10">
      <button className="bg-[#d93649] p-2 rounded-md w-1/2 text-white">
        Delete done tasks
      </button>
      <button className="bg-[#d93649] p-2 rounded-md w-1/2 text-white">
        Delete all tasks
      </button>
    </div>
  );
}
