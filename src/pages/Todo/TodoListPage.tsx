import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title, Spacing, Button } from 'components/UI';
import TodoItem from 'components/Todo/TodoItem';

export default function TodoListPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('jwt-token')) {
      navigate(`/signin`);
      return;
    }
  }, [navigate]);

  return (
    <>
      <Title>todos</Title>
      <Spacing size={30} />
      <form className="form">
        <input type="text" data-testid="new-todo-input" className="input" />
        <Button data-testid="new-todo-add-button" size="big">
          추가
        </Button>
      </form>
      <Spacing size={30} />
      <ul className="ul">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </>
  );
}
