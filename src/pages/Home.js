import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ActionsButton, { DeleteButtons } from '../components/ActionsButton';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import TodoLists from '../components/TodoLists';

export default function Home({ data }) {
  const { activity } = useParams();

  function generateId() {
    return Date.now();
  }

  if (activity) {
    data = [
      ...data,
      {
        id: generateId(),
        task: activity,
        complete: false,
      },
    ];
  }

  return (
    <div className=" m-auto max-w-screen-lg">
      <PageTitle>TodoSearch</PageTitle>
      <Header data={data} />
      <h2 className="text-[28px] font-medium text-center m-5">TodoList</h2>
      <ActionsButton />
      <TodoLists data={data} />
      <DeleteButtons />
    </div>
  );
}
