import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ActionsButton, { DeleteButtons } from '../components/ActionsButton';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import TodoLists from '../components/TodoLists';

export default function Home({ data }) {
  return (
    <div className=" m-auto max-w-screen-lg">
      <PageTitle>TodoSearch</PageTitle>
      <Header />
      <h2 className="text-[28px] font-medium text-center m-5">TodoList</h2>
      <ActionsButton />
      <TodoLists />
      <DeleteButtons />
    </div>
  );
}
