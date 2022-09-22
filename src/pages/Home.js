import React from 'react';
import ActionsButton, { DeleteButtons } from '../components/ActionsButton';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import TodoLists from '../components/TodoLists';

export default function Home({
  todos,
  deleteTask,
  taskDone,
  setUpdateData,
  tempTodos,
  selectAllTodos,
  selectDoneTodos,
  selectTodos,
}) {
  return (
    <div className=" m-auto max-w-screen-lg">
      <PageTitle>TodoSearch</PageTitle>
      <Header />
      <h2 className="text-[28px] font-medium text-center m-5">TodoList</h2>
      <ActionsButton
        selectAllTodos={selectAllTodos}
        selectDoneTodos={selectDoneTodos}
        selectTodos={selectTodos}
      />
      <TodoLists
        todos={todos}
        tempTodos={tempTodos}
        deleteTask={deleteTask}
        taskDone={taskDone}
        setUpdateData={setUpdateData}
      />
      <DeleteButtons />
    </div>
  );
}
